import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  VictoryZoomContainer,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryScatter,
  VictoryAxis,
  VictoryTooltip,
} from "victory";

import styles from "../styles/Charts.module.css";

export default function Timeline({ data, dateFrom, dateTo }) {
  return (
    <div className={styles.pieRoot}>
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={<VictoryZoomContainer />}
        interpolation="linear"
        data={data}
      >
        <VictoryAxis
          x={data.x}
          style={{
            tickLabels: { angle: -45, fontSize: 10 },
          }}
          scale={{ x: "time" }}
          fixLabelOverlap
        />
        <VictoryAxis
          y={data.y}
          style={{
            tickLabels: { fontSize: 10, paddingLeft: 20, padding: 0 },
          }}
          tickFormat={(datum) => `${datum + data[0].currency}`}
          scale={{ y: "linear" }}
          dependentAxis
          fixLabelOverlap
        />
        <VictoryLine
          data={data}
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc", overflow: "hidden" },
            labels: {
              fontSize: "10",
            },
          }}
        />
        <VictoryScatter
          style={{
            parent: {
              border: "1px solid #ccc",
            },
            data: {
              fill: "#c43a31",
              fillOpacity: 0.6,
              stroke: "#c43a31",
              strokeWidth: 3,
            },
          }}
          labelComponent={
            <VictoryTooltip
              pointerLength={0}
              flyoutStyle={{
                stroke: "#868C97",
                strokeWidth: 2,
                fill: "#FFFFFF",
              }}
              style={{
                fill: "#868C97",
                fontSize: 10,
              }}
            />
          }
          size={4}
          data={data}
          fixLabelOverlap
        />
      </VictoryChart>
      <Typography component="h4" variant="p2">
        From: {dateFrom}
      </Typography>
      <Typography component="h4" variant="p2">
        To: {dateTo}
      </Typography>
    </div>
  );
}
