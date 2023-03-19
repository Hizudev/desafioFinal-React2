import { Box, Button, Typography } from "@mui/material";
import { useProyectContext } from "../Context/ProyectContext";

export default function NotFound() {
  const { navigate } = useProyectContext();
  return (
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
        gutterBottom
        fontFamily="Lobster, cursive"
        className="slogan"
      >
        Error 404
      </Typography>
      <Typography
        align="center"
        gutterBottom
        fontFamily="Lobster, cursive"
        className="slogan"
        variant="h4"
      >
        Sitio no encontrado
      </Typography>
      <Button
        sx={{ margin: "2em 0 1em 0" }}
        variant="contained"
        color="error"
        onClick={() => navigate("/")}
      >
        <Typography variant="body1">Volver</Typography>
      </Button>
    </Box>
  );
}
