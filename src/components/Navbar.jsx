import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("email")) || false
  );
  console.log(currentUser);
  const navigate = useNavigate();

  const displayName = "Erhan TEZER";

  //   useEffect(() => {
  //     setCurrentUser(JSON.parse(sessionStorage.getItem("email")));
  //   }, []);

  const handleClick = () => {
    setCurrentUser(sessionStorage.clear());
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact Form
          </Typography>
          {currentUser ? (
            <>
              <h5 className="mb-0 text-capitalize">{displayName}</h5>
              <AccountCircle onClick={handleClick} />
            </>
          ) : (
            <>
              <Button onClick={() => navigate("login")} color="inherit">
                Login
              </Button>
              <Button onClick={() => navigate("register")} color="inherit">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
