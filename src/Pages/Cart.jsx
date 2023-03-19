import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, IconButton, Typography } from "@mui/material";
import { useProyectContext } from "../Context/ProyectContext";
import { Box } from "@mui/system";
import swal from "sweetalert";

export default function Cart() {
  const {
    order,
    setOrder,
    addToOrder,
    totalAmount,
    setTotalAmount,
    totalQuantity,
    setTotalQuantity,
    navigate,
  } = useProyectContext();

  const removeOrder = (pizzaObj) => {
    if (pizzaObj.quantity === 1) {
      const index = order.map((item) => item.id).indexOf(pizzaObj.id);
      order.splice(index, 1);
      setOrder([...order]);
      setTotalQuantity(totalQuantity - 1);
      setTotalAmount(totalAmount - pizzaObj.price);
    } else {
      const index = order.map((item) => item.id).indexOf(pizzaObj.id);
      order[index].quantity = order[index].quantity - 1;
      setOrder([...order]);
      setTotalQuantity(totalQuantity - 1);
      setTotalAmount(totalAmount - pizzaObj.price);
    }
  };

  const generateOrder = () => {
    swal(
      "¡Pedido generado!",
      "Gracias por tu compra, no olvides dejar propina.",
      "https://irp-cdn.multiscreensite.com/256e4805/dms3rep/multi/source.gif"
    );
  };

  return (
    <>
      {totalAmount === 0 ? (
        <Box
          sx={{
            backgroundColor: "#FCDDB0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Typography
            variant="h2"
            fontFamily="Lobster, cursive"
            sx={{ color: "white" }}
            className="slogan"
          >
            Carrito Vacio
          </Typography>
          <Button
            sx={{ marginTop: "5em" }}
            variant="contained"
            color="error"
            onClick={() => navigate("/")}
          >
            <Typography variant="body1">Volver</Typography>
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: "#FCDDB0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            py={3}
            px={1}
            align="center"
            sx={{ color: "#ff6b6b" }}
            className="slogan"
            fontFamily="Lobster, cursive"
            variant="h3"
          >
            Detalles de tu pedido
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              width: { xs: 350, sm: 550, md: 750, lg: 950 },
              backgroundColor: "#FFFAD7",
            }}
          >
            <Table aria-label="simple table">
              <TableBody>
                {order.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell
                      sx={{
                        display: { sm: "flex" },
                        justifyContent: { sm: "space-between" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{ width: { xs: "60px", sm: "70px", lg: "90px" } }}
                        >
                          <img src={item.img} alt={item.name} />
                        </Box>
                        <Typography variant="h5" sx={{ paddingLeft: "1em" }}>
                          {item.name[0].toUpperCase() + item.name.substring(1)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h5" sx={{ paddingRight: "1em" }}>
                          $ {parseInt(item.price) * parseInt(item.quantity)}
                        </Typography>
                        <IconButton
                          color="error"
                          sx={{ padding: "0" }}
                          onClick={() => removeOrder(item)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography sx={{ padding: "0 1em" }} variant="body1">
                          {item.quantity}
                        </Typography>
                        <IconButton
                          color="success"
                          sx={{ padding: "0" }}
                          onClick={() => addToOrder(item)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={generateOrder}
                    >
                      <Typography variant="h6">Pagar ${totalAmount}</Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            sx={{ margin: "2em 0 1em 0" }}
            variant="contained"
            color="error"
            onClick={() => navigate("/")}
          >
            <Typography variant="body1">Volver</Typography>
          </Button>
        </Box>
      )}
    </>
  );
}
