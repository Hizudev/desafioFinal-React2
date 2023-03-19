import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useProyectContext } from "../Context/ProyectContext";

export default function ButtonAppBar() {
  const { totalAmount, totalQuantity, navigate } = useProyectContext();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#ff6b6b" }}>
      <Toolbar>
        <Typography
          sx={{ flexGrow: 1 }}
          pl={3}
          fontFamily="Lobster, cursive"
          className="slogan"
          variant="h6"
        >
          ¡Mamma mia!
        </Typography>
        <IconButton
          size="large"
          color="inherit"
          aria-label="cart"
          sx={{ mr: 2 }}
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={totalQuantity} color="error">
            <ShoppingCartIcon sx={{ color: "#174c4f" }} />
          </Badge>
        </IconButton>
        <Typography variant="h6" className="slogan">
          $ {totalAmount}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
