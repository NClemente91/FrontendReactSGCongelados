import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/users/thunks";
import { setMessage } from "../../store/slices/users/userSlice";

import "../Register/Register.css";

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

const Register = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(setMessage(null));
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verifyData(event.target)) {
      const newUser = {
        name: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value,
        address: {
          street: event.target.street.value,
          streetNumber: event.target.streetNumber.value,
          apartment: event.target.apartment.value,
          city: event.target.city.value,
        },
      };
      dispatch(registerUser(newUser));
    }
  };

  const verifyData = (data) => {
    const email = data.email.value;
    const password = data.password.value;
    const confirmPassword = data.samePassword.value;
    const name = data.firstName.value;
    const lastName = data.lastName.value;
    const street = data.street.value;
    const streetNumber = data.streetNumber.value;
    const city = data.city.value;

    if (!name) {
      dispatch(
        setMessage({ type: "error", detail: "Debes completar tu nombre" })
      );
      return false;
    }

    if (!lastName) {
      dispatch(
        setMessage({ type: "error", detail: "Debes completar tu apellido" })
      );
      return false;
    }
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

    if (!confirmPassword) {
      dispatch(
        setMessage({
          type: "error",
          detail: "Debes ingresar la verificación de contraseña",
        })
      );
      return false;
    }

    if (password !== confirmPassword) {
      dispatch(
        setMessage({ type: "error", detail: "Las contraseñas no coinciden" })
      );
      return false;
    }

    if (!street) {
      dispatch(
        setMessage({ type: "error", detail: "Debes completar la Dirección" })
      );
      return false;
    }

    if (!city) {
      dispatch(
        setMessage({
          type: "error",
          detail: "Debes completar la Ciudad",
        })
      );
      return false;
    }

    if (!streetNumber) {
      dispatch(
        setMessage({
          type: "error",
          detail: "Debes completar el numero de calle",
        })
      );
      return false;
    }

    return true;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className="container-register">
        <CssBaseline />
        <Grid
          className="image-register"
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={3} square>
          <Box
            sx={{
              mt: 2,
              mb: 0,
              mx: 4,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 0, bgcolor: "rgb(57,118,61)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrate
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={(e) => handleSubmit(e)}
              sx={{ mt: 1 }}
            >
              <Typography component="h5" variant="h5">
                Usuario
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    name="firstName"
                    autoComplete="given-name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="samePassword"
                    label="Repetir contraseña"
                    type="password"
                    id="samePassword"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Typography mt={2} component="h5" variant="h5">
                Dirección
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="street"
                    label="Calle"
                    name="street"
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="streetNumber"
                    label="Número de calle"
                    name="streetNumber"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    defaultValue="Casa"
                    name="apartment"
                    label="Departamento"
                    id="apartment"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="Ciudad"
                    id="city"
                  />
                </Grid>
              </Grid>
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
                Registrarse
              </Button>
              <Grid container justifyContent="center" sx={{ mb: 2 }}>
                <Grid item>
                  <Link to="/signin">¿Ya estás registrado? Click acá</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
