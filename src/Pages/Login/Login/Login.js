import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import loginLogoImg from "../../../img/cleaning-logo.png";
import { Link as Rlink, useNavigate } from "react-router-dom";
import loginStyle from "../../../assets/css/login.module.css";
import useFirebase from "../../../hooks/useFirebase";
import CircularProgress from "@mui/material/CircularProgress";
import swal from "sweetalert";
import Divider from "@mui/material/Divider";
import googleIcon from "../../../img/google-icon.png";
import facebookIcon from "../../../img/facebook-icon.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
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

const Login = () => {
  document.title = "Login";

  const [loginLoading, setLoginLoding] = React.useState(false);

  const navigate = useNavigate();

  const {
    handleEmailSignIn,
    handleResetPassword,
    handleGoogleSignIn,
    handleFacebookSignIn,
  } = useFirebase();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const signInData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const { email, password } = signInData;

    handleEmailSignIn(email, password, navigate, setLoginLoding);

    setLoginLoding(true);
  };
  //reset password
  const resetPassword = () => {
    swal("Write your email:", {
      content: "input",
    }).then((value) => {
      handleResetPassword(value);
    });
  };

  return (
    <Box className={loginStyle.loginFrom}>
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
          >
            <Avatar sx={{ m: 1, backgroundColor: "#e5f7fb" }}>
              <img src={loginLogoImg} alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              Validate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {loginLoading ? "" : " Login"}
                {loginLoading ? (
                  <CircularProgress color="success" />
                ) : (
                  <LoginIcon />
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" onClick={resetPassword} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Rlink to="/register">
                    {"Don't have an account? Sign Up"}
                  </Rlink>
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <Divider />
                Or
                <Divider />
              </Box>

              <Grid container>
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" onClick={handleGoogleSignIn}>
                    <img
                      src={googleIcon}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />
                    Continue Google
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" onClick={handleFacebookSignIn}>
                    <img
                      src={facebookIcon}
                      style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "-.5rem",
                      }}
                      alt=""
                    />
                    Continue Facebook
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, pb: 12.5 }} />
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Login;
