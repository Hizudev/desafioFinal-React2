import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material/";
import { useProyectContext } from "../Context/ProyectContext";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import PizzaCard from "../Components/PizzaCard";

export default function Product() {
  const { navigate } = useProyectContext();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [cardSwitch, setCardSwitch] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch("/pizzas.json");
      const ApiData = await response.json();
      setProduct(ApiData.filter((item) => item.id === id));
      setCardSwitch(true);
    } catch (error) {
      swal("Error en la solicitud", `${error}`, "error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#FCDDB0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PizzaCard pizzaInfo={product} cardSwitch={cardSwitch} />
      <Button
        variant="contained"
        color="error"
        sx={{ marginTop: { xs: "2em", md: "6em" } }}
        onClick={() => navigate("/")}
      >
        <Typography variant="body1">Volver</Typography>
      </Button>
    </Box>
  );
}
