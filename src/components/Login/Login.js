import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/slices/users/thunks";
import { setMessage } from "../../store/slices/users/userSlice";

import "../Login/Login.css";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Alert,
} from "@mui/material";

const theme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isLogged } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
    dispatch(setMessage(null));
  }, [dispatch, isLogged, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verifyData(event.target)) {
      const userLogged = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      dispatch(loginUser(userLogged));
    }
  };

  const verifyData = (data) => {
    const email = data.email.value;
    const password = data.password.value;

    if (!email) {
      dispatch(
        setMessage({
          type: "error",
          detail: "Debes ingresar una dirección de correo electrónico",
        })
      );
      return false;
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i;

    if (!emailRegex.test(email)) {
      dispatch(
        setMessage({
          type: "error",
          detail: "Debes ingresar una dirección de correo electrónico válida",
        })
      );
      return false;
    }

    if (!password) {
      dispatch(
        setMessage({
          type: "error",
          detail: "Debes ingresar una contraseña",
        })
      );
      return false;
    }

    return true;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className="container-login">
        <CssBaseline />
        <Grid
          className="image-login"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgb(57,118,61)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography component="h6" variant="h6">
                {message && (
                  <Alert severity={message.type}>{message.detail}</Alert>
                )}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to="/register">¿No estás registrado? Click acá</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
