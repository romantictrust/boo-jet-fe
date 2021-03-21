import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../styles/logo.png";
import styles from "../styles/Header.module.css";
import SideMenu from "../../SideMenu/components/SideMenu";
import useToggle from "../../../hooks/useToggle";

function Header({ isSigned = true }) {
  const [isDrawlerOpened, toggleDrawler] = useToggle();

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
            {isSigned ? (
              <Grid item>
                <Grid container>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={toggleDrawler}
                    className={isDrawlerOpened ? styles.hide : null}
                  >
                    <MenuIcon />
                  </IconButton>
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
      <SideMenu isOpened={isDrawlerOpened} toggleDrawler={toggleDrawler} />
    </div>
  );
}

export default withRouter(Header);
