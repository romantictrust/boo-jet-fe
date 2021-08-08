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
import useValidate from "../../../shared/hooks/useValidate";

const fields = [
  { name: "email", module: "auth" },
  { name: "password", module: "auth" },
  { name: "userName", module: "auth" },
];

export default function SignUp({ onSendUser, onPushMessage }) {
  const [validationFields, handlers, errors, isValid, validate] = useValidate(
    fields,
    onPushMessage
  );

  const confirmReg = (event) => {
    event.preventDefault();
    const { email, password, userName } = validationFields;
    if (validate()) {
      onSendUser({
        user: {
          email,
          password,
          userName,
        },
      });
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
                error={errors.userName}
                fullWidth
                id="userName"
                label="Username"
                autoFocus
                onChange={handlers.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={errors.email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handlers.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={errors.password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlers.password}
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
              <Link to="/auth" className={styles.links}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
