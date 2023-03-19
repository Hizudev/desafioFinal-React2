import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import { useProyectContext } from "../Context/ProyectContext";

export default function MediaCard({ pizzaInfo, cardSwitch }) {
  const { addToOrder } = useProyectContext();
  return (
    <>
      {cardSwitch ? (
        <Card
          sx={{
            backgroundColor: "#FFFAD7",
            maxWidth: { xs: 345, sm: 500, md: 800, lg: 900, xl: 1100 },
            marginTop: { xs: "3em", md: "5em" },
            display: { md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { md: "50%" } }}>
            <CardMedia
              sx={{
                height: { xs: 140, sm: 240, md: "100%" },
              }}
              image={pizzaInfo[0].img}
              title={pizzaInfo[0].name}
            />
          </Box>
          <Box sx={{ width: { md: "50%" } }}>
            <CardContent>
              <Typography
                gutterBottom
                align="center"
                fontFamily="Lobster, cursive"
                className="slogan"
                sx={{ color: "#ff6b6b", padding: { xl: ".5em 0" } }}
                variant="h4"
                component="div"
              >
                {pizzaInfo[0].name[0].toUpperCase() +
                  pizzaInfo[0].name.substring(1)}
              </Typography>
              <Typography
                align="justify"
                sx={{
                  paddingBottom: {
                    xs: ".5em",
                    sm: "1em",
                    md: "1.5em",
                    xl: "2em",
                  },
                  borderBottom: "dashed #ff6b6b",
                }}
                variant="body2"
                color="text.secondary"
              >
                {pizzaInfo[0].desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#174c4f",
                      paddingTop: {
                        xs: ".5em",
                        sm: "1em",
                        lg: "2em",
                        xl: "2.5em",
                      },
                    }}
                  >
                    Ingredientes:
                  </Typography>
                  <ul>
                    {pizzaInfo[0].ingredients.map((ingredient) => (
                      <li key={ingredient}>
                        <Typography variant="body2" color="text.secondary">
                          🍕{" "}
                          {ingredient[0].toUpperCase() +
                            ingredient.substring(1)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ color: "#174c4f" }}
                  >
                    Solo por:
                  </Typography>
                  <Typography variant="h4" sx={{ color: "#174c4f" }}>
                    $ {pizzaInfo[0].price}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                color="success"
                variant="contained"
                onClick={() => addToOrder(pizzaInfo[0])}
              >
                <Typography variant="body2">Añadir</Typography>
              </Button>
            </CardActions>
          </Box>
        </Card>
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
