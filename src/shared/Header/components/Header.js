import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from "../styles/logo.png";
import styles from "../styles/Header.module.css";

function Header(props) {
  return (
    <div>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <Grid container className={styles.root}>
            <Grid item>
              <Link to="/">
                <img className={styles.logo} src={logo} alt="Logo" />
              </Link>
            </Grid>
            {false ? (
              <Grid item>
                <Grid container>
                  <Button color="inherit" disableRipple>
                    <Typography>{}</Typography>
                  </Button>
                  <Button color="inherit" disableRipple onClick={() => {}}>
                    Log out
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <Button color="inherit" disableRipple>
                  <Link to="/authorization" className={styles.links}>
                    Login
                  </Link>
                </Button>
                <Button color="inherit" disableRipple>
                  <Link to="/registration" className={styles.links}>
                    Register
                  </Link>
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
