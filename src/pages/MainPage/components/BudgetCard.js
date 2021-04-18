import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import WidgetMenu from "../../../shared/components/Widget/components/WidgetMenu";
import { WidgetTypes } from "../../../shared/components/Widget/constants";

import styles from "../styles/BudgetCard.module.css";

export default function BudgetCard({ budget }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid item xs={4}>
      <Card className={styles.card} style={{ backgroundColor: budget.color }}>
        <CardHeader
          className={styles.heading}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleClick} />
            </IconButton>
          }
          title={
            <Typography variant="h5" component="h2">
              {budget.name}
            </Typography>
          }
        />
        <WidgetMenu
          widgetType={WidgetTypes.BudgetGroups}
          data={budget}
          anchorEl={anchorEl}
          onClose={handleClose}
        />
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {budget.currency?.symbol}
          </Typography>
          <Typography variant="body2" component="p">
            {budget.value}
            {budget.currency?.symbol_native}
          </Typography>
        </CardContent>
        {/* <CardActions>
        </CardActions> */}
      </Card>
    </Grid>
  );
}
