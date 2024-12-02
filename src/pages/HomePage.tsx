import { Box, Button, Typography } from "@mui/material";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const HomePage = () => {
  const { logout, status, token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || status === "unAuthorized") {
      navigate("/login");
    }
  }, [token, status]);

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FEFAE0",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#283618",
        }}
      >
        Home Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onLogout}
        sx={{
          padding: "10px 20px",
          fontSize: "16px",
          textTransform: "none",
        }}
      >
        Cerrar Sesión
      </Button>
    </Box>
  );
};
