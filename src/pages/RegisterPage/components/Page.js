import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "../styles/RegisterPage.module.css";
import {
  validateEmail,
  validatePassword,
} from "../../../shared/functions/validate";
import Snackbar from "../../../shared/components/Snackbar";

export default function SignUp({ onSendUser }) {
  const [snackMessage, setSnackMessage] = React.useState();

  const setSnack = (message) => {
    Promise.resolve().then(() => {
      setSnackMessage(message);
    });
  };

  const confirmReg = (event) => {
    event.preventDefault();
    setSnack();
    const email = SignUp.email.value;
    const password = SignUp.password.value;
    const userName = SignUp.userName.value;

    if (!validateEmail(email)) {
      setSnack({ notification: "Invalid email" });
    } else if (!validatePassword(password)) {
      setSnack({
        notification:
          "Password should contain at least one digit, one lower case and least 8 characters",
      });
    } else {
      const user = {
        user: {
          email,
          password,
          userName,
        },
      };
      onSendUser(user);
    }
  };

  return (
    <Container className={styles.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={styles.form}
          onSubmit={confirmReg}
          autoComplete="off"
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="userName"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoFocus
                inputRef={(el) => {
                  SignUp.userName = el;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={(el) => {
                  SignUp.email = el;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={(el) => {
                  SignUp.password = el;
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={styles.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                to="/authorization"
                style={{ textDecoration: "none", color: "purple" }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {snackMessage ? <Snackbar message={snackMessage} /> : null}
      </div>
    </Container>
  );
}
