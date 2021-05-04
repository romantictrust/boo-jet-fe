import React from "react";
import Typography from "@material-ui/core/Typography";
import { VictoryPie, VictoryTheme } from "victory";

import styles from "../styles/Charts.module.css";

export default function Pie({ data, dateFrom, dateTo }) {
  return (
    <div className={styles.pieRoot}>
      <VictoryPie
        theme={VictoryTheme.material}
        colorScale={["tomato", "LightGreen"]}
        padding={70}
        data={data}
      />
      <Typography component="h4" variant="p2">
        From: {dateFrom}
      </Typography>
      <Typography component="h4" variant="p2">
        To: {dateTo}
      </Typography>
    </div>
  );
}
