import { Box, Button, InputAdornment, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { useFormHooks } from "../hooks/useFormHooks";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuthStore } from "../store/useAuthStore";

export const LoginPage = () => {
  const { login } = useAuthStore();

  const { formState, setFormsState } = useFormHooks({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  //login("user@amalgama.co", "password");
  const onLogin = async () => {
    if (formState.email === "" || formState.password === "") return;
    const wasSuccessful = await login(formState.email, formState.password);
    if (wasSuccessful) return;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    setFormsState({
      email: "",
      password: "",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FEFAE0",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={"form"}
        sx={{
          p: 10,
          backgroundColor: "#626F47",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{
            marginBottom: 2,
          }}
          autoComplete="off"
          label="Email"
          type="text"
          id="emailTextFiel"
          value={formState.email}
          onChange={(e) =>
            setFormsState({
              ...formState,
              email: e.target.value,
            })
          }
        />
        <TextField
          sx={{
            marginBottom: 2,
          }}
          autoComplete="off"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="passwordTextFiel"
          value={formState.password}
          onChange={(e) =>
            setFormsState({
              ...formState,
              password: e.target.value,
            })
          }
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  onClick={() => setShowPassword(!showPassword)}
                  position="end"
                >
                  {showPassword ? (
                    <Visibility sx={{ color: "#FEFAE0" }} />
                  ) : (
                    <VisibilityOff sx={{ color: "#FEFAE0" }} />
                  )}
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          onClick={onLogin}
          sx={{ backgroundColor: "#FEFAE0", color: "#626F47" }}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
};
