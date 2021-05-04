import React from "react";
import Typography from "@material-ui/core/Typography";
import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

import styles from "../styles/Charts.module.css";

export default function CategoriesPie({ data, dateFrom, dateTo }) {
  return (
    <div className={styles.pieRoot}>
      <VictoryPie
        theme={VictoryTheme.material}
        colorScale={["tomato", "orange", "gold", "cyan", "navy", "red", "blue", "green", "purple"]}
        labelComponent={<VictoryLabel renderInPortal/>}
        padding={100}
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
