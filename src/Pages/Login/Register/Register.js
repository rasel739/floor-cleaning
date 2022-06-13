import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import registerStyle from "../../../assets/css/login.module.css";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import registerLogo from "../../../img/cleaning-logo.png";
import swal from "sweetalert";
import { Link as Rlink } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ py: 2.9, color: "#e5f7fb" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Floor Cleaning
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffa726",
    },
  },
});

const Register = () => {
  document.title = "Register";
  const navigate = useNavigate();
  const [registerLoading, setRegisterLoding] = React.useState(false);

  const { handleEmailSignUp } = useFirebase();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const signUpData = {
      firstName: data?.get("firstName"),
      lastName: data?.get("lastName"),
      email: data?.get("email"),
      password: data?.get("password"),
      confirmPassword: data?.get("confirmPassword"),
    };

    const { email, password, confirmPassword, firstName, lastName } =
      signUpData;

    const name = `${firstName} ${lastName}`;

    if (password === confirmPassword) {
      handleEmailSignUp(email, password, navigate, name, setRegisterLoding);

      event.target.reset();
    } else {
      swal("Password Not Match!", "please input the right password", "error");
    }
    setRegisterLoding(true);
  };

  return (
    <Box className={registerStyle.registerFrom}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className={registerStyle.registerCenterFrom}
          >
            <Avatar sx={{ m: 1, backgroundColor: "#e5f7fb" }}>
              <img src={registerLogo} alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              Validate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {registerLoading ? "" : " Sign Up"}
                {registerLoading ? <CircularProgress color="success" /> : ""}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Rlink to="/login" variant="body2">
                    Already have an account? Login
                  </Rlink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Register;
