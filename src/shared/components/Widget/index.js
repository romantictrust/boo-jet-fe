import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import styles from "./styles/Widget.module.css";
import WidgetMenu from "./components/WidgetMenu";

export default function Widget({
  widgetType,
  data,
  heading,
  children,
  width = 12,
  isPreview = false,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={width}>
      <Card className={styles.root}>
        {heading && (
          <CardHeader
            className={styles.heading}
            action={
              <IconButton onClick={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={heading}
          />
        )}
        <WidgetMenu
          widgetType={widgetType}
          anchorEl={anchorEl}
          data={data}
          isPreview={isPreview}
          onClose={handleClose}
        />
        <CardContent className={isPreview ? styles.disabled : null}>
          {children}
        </CardContent>
        {/* <CardActions disableSpacing>
        </CardActions> */}
      </Card>
    </Grid>
  );
}
