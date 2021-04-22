import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import ActionPopup from "./ActionPopup";
import WidgetMenu from "../../../../shared/components/Widget/components/WidgetMenu";
import { WidgetTypes } from "../../../../shared/components/Widget/constants";

import styles from "../../styles/BudgetCard.module.css";
import useToggle from "../../../../shared/hooks/useToggle";

export default function BudgetCard({
  budget,
  onPushMessage,
  onPostBudgetAction,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isActionsOpened, openActions] = useToggle();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={4}>
      <Card className={styles.card} style={{ backgroundColor: budget.color }}>
        <CardHeader
          className={styles.heading}
          action={
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
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
          onClose={handleCardMenuClose}
        />
        <CardContent>
          <Grid container>
            <Grid item xs={10}>
              <Typography color="textSecondary" gutterBottom>
                {budget.currency?.symbol}
              </Typography>
              <Typography variant="h6" component="p">
                {budget.value}
                {budget.currency?.symbol_native}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={openActions}>
                <AddCircleIcon
                  fontSize="default"
                  className={styles.addActionButton}
                />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
        </CardActions> */}
      </Card>
      {isActionsOpened && (
        <ActionPopup
          budgetId={budget._id}
          onActionsClose={openActions}
          onPushMessage={onPushMessage}
          onPostBudgetAction={onPostBudgetAction}
        />
      )}
    </Grid>
  );
}
