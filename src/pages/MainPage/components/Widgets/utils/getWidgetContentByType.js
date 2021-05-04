import React from "react";

import TableWidget from "../table";
import DataGrid from "../grid";
import PChartWP from "../charts/pie";
import TimeLineChart from "../charts/timeline";
import CategoriesPie from "../charts/categories";
import { WidgetTypes } from "../../../../../shared/components/Widget/constants";

import {
  processPChartWP,
  processTimeLineChart,
  processCategoriesPie,
} from "./chartsDataProcessors";
import {
  findEarliest,
  findLatest,
} from "../../../../../shared/functions/dates";

export default function getWidgetContentByType(type, actions, budgetId) {
  switch (type) {
    case WidgetTypes.ActionsTable:
      return <TableWidget actions={actions} />;
    case WidgetTypes.DataGrid:
      return <DataGrid budgetId={budgetId} actions={actions} />;
    case WidgetTypes.PChartWP:
      return (
        <PChartWP
          data={processPChartWP(actions)}
          dateFrom={findEarliest(actions)}
          dateTo={findLatest(actions)}
        />
      );
    case WidgetTypes.TimeLineChart:
      return (
        <TimeLineChart
          data={processTimeLineChart(actions)}
          dateFrom={findEarliest(actions)}
          dateTo={findLatest(actions)}
        />
      );
    case WidgetTypes.CategoriesWastagePie:
    case WidgetTypes.CategoriesProfitPie:
      return (
        <CategoriesPie
          data={processCategoriesPie(
            actions,
            type === WidgetTypes.CategoriesWastagePie
          )}
          dateFrom={findEarliest(actions)}
          dateTo={findLatest(actions)}
        />
      );
    default:
      break;
  }
}
