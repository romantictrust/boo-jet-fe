import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckIcon from "@material-ui/icons/Check";
import TableChartIcon from "@material-ui/icons/TableChart";

import styles from "../../../styles/WidgetTypeForm.module.css";
import { WidgetTypes } from "../../../../../shared/components/Widget/constants";

const widgets = [
  {
    id: WidgetTypes.ActionsTable,
    name: "Actions Table",
    icon: <TableChartIcon className={styles.icon} />,
  },
];

export default function WidgetTypeForm({ type, onTypeChange }) {
  return (
    <div>
      <DialogContentText>Please select the widget</DialogContentText>
      <Grid container spacing={2} className={styles.widgetsContainer}>
        {widgets.map((widget) => (
          <Grid item xs={3}>
            <Button onClick={() => onTypeChange(widget.id)}>
              <Badge
                badgeContent={<CheckIcon />}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                color="primary"
                invisible={type !== widget.id}
              >
                <Card className={styles.card}>
                  <CardHeader
                    className={styles.header}
                    title={
                      <Typography variant="h6" component="h1">
                        {widget.name}
                      </Typography>
                    }
                  />
                  <CardContent className={styles.iconContainer}>
                    {widget.icon}
                  </CardContent>
                </Card>
              </Badge>
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
