import { Box, IconButton, Typography } from "@mui/material";
import MammaMiaLogo from "../assets/imgs/mammaMiaLogo.png";
import imgHeader from "../assets/imgs/headerBg.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `linear-gradient(to top, rgba(11, 163, 96, .6) 0%, rgba(60, 186, 146, .6) 100%), url(${imgHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
        height: { xs: "112vh", sm: "100vh", xl: "94vh" },
      }}
    >
      <Box pt={2} sx={{ width: { xs: "350px", md: "500px" } }}>
        <img src={MammaMiaLogo} alt="Mamma Mia Logo" />
      </Box>
      <Typography
        pt={{ xs: 1, md: 5 }}
        px={2}
        align="center"
        fontFamily="Lobster, cursive"
        className="slogan"
        variant="h2"
      >
        Deléitate con nuestra variedad de sabores
      </Typography>
      <IconButton
        size="large"
        sx={{ marginTop: { lg: "3em" }, color: "#ff6b6b" }}
        href="#menu"
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 100 }} />
      </IconButton>
    </Box>
  );
}
