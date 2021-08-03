import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "../styles/AuthPage.module.css";
import usePrevious from "../../../shared/hooks/usePrevious";
import useValidate from "../../../shared/hooks/useValidate";

const fields = [
  { name: "email", module: "auth" },
  { name: "password", module: "auth" },
];

function SignIn({ history, user, onSendUser, onPushMessage }) {
  const [validationFields, handlers, errors, isValid, validate] = useValidate(
    fields,
    onPushMessage
  );
  const prevUser = usePrevious(user);
  const confirmAuth = async (event) => {
    event.preventDefault();

    if (validate()) {
      const user = {
        user: {
          email: validationFields.email,
          password: validationFields.password,
        },
      };
      onSendUser(user);
    }
  };

  useEffect(() => {
    if (user.id && prevUser && prevUser?.id !== user.id) {
      history.replace("/");
      history.go(0);
    }
  }, [user]);

  return (
    <Container className={styles.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={styles.form}
          onSubmit={confirmAuth}
          autoComplete="off"
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errors.email}
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={handlers.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errors.password}
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlers.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={styles.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/join" className={styles.links}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default withRouter(SignIn);
