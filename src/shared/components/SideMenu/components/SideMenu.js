import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import styles from "../styles/SideMenu.module.css";
import { withRouter } from "react-router-dom";

function SideMenu({ history, isOpened, toggleDrawler }) {
  const handleSignOut = () => {
    localStorage.clear();
    setTimeout(() => {
      history.replace("/auth");
      history.go(0);
    }, 1000);
  };

  return (
    <Drawer
      className={styles.drawer}
      variant="persistent"
      anchor="right"
      open={isOpened}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={toggleDrawler}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={styles.signOut}>
        <ListItem button onClick={handleSignOut} key={"signOut"}>
          <ListItemText primary="Sign out" />
        </ListItem>
      </List>
    </Drawer>
  );
}
export default withRouter(SideMenu);
