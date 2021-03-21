import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import styles from "./styles/Widget.module.css";
import WidgetMenu from "./components/WidgetMenu";

export default function Widget({ widgetType, heading, children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={styles.root}>
      {heading && (
        <CardHeader
          className={styles.heading}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleClick} />
            </IconButton>
          }
          title={heading}
        />
      )}
      <WidgetMenu widgetType={widgetType} anchorEl={anchorEl} onClose={handleClose} />
      <CardContent>{children}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
