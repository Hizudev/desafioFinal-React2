import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useProyectContext } from "../Context/ProyectContext";
import swal from "sweetalert";

export default function Galery() {
  const { addToOrder, navigate } = useProyectContext();
  const [data, setData] = useState([]);
  const [galerySwitch, setGalerySwitch] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch("/pizzas.json");
      const ApiData = await response.json();
      setData(ApiData);
      setGalerySwitch(true);
    } catch (error) {
      swal("Error en la solicitud", `${error}`, "error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {galerySwitch ? (
        <Box
          id="menu"
          sx={{
            backgroundColor: "#FCDDB0",
            padding: { xs: "3em 0", lg: "3em 5em" },
          }}
        >
          <Typography
            pb={3}
            sx={{ color: "#ff6b6b" }}
            fontFamily="Lobster, cursive"
            className="slogan"
            variant="h2"
            align="center"
          >
            Menu
          </Typography>
          <Grid
            container
            spacing={2}
            px={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {data.map((item) => (
              <Grid
                item
                key={item.id}
                lg={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    width: { xs: "350px", sm: "400px" },
                    backgroundColor: "#FFFAD7",
                  }}
                >
                  <CardMedia
                    sx={{ height: { xs: "200px", sm: "200px" } }}
                    image={item.img}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography
                      align="center"
                      m={0}
                      sx={{ color: "#ff6b6b" }}
                      gutterBottom
                      variant="h4"
                      fontFamily="Lobster, cursive"
                      className="slogan"
                      component="div"
                    >
                      {item.name[0].toUpperCase() + item.name.substring(1)}
                    </Typography>
                    <Box
                      px={5}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <ul>
                        {item.ingredients.map((ingredient) => (
                          <li key={ingredient}>
                            <Typography variant="body2" color="text.secondary">
                              🍕{" "}
                              {ingredient[0].toUpperCase() +
                                ingredient.substring(1)}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                      <Box>
                        <Typography
                          variant="h5"
                          align="center"
                          sx={{ color: "#174c4f" }}
                        >
                          Solo por:
                        </Typography>
                        <Typography variant="h4" sx={{ color: "#174c4f" }}>
                          $ {item.price}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "1em",
                    }}
                  >
                    <Button
                      color="success"
                      variant="contained"
                      size="small"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <Typography variant="body2">Ver más</Typography>
                    </Button>
                    <Button
                      color="success"
                      variant="contained"
                      size="small"
                      onClick={() => addToOrder(item)}
                    >
                      <Typography variant="body2">Añadir</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box
          id="menu"
          sx={{
            height: "20vh",
            backgroundColor: "#FCDDB0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="success" />
        </Box>
      )}
    </>
  );
}
