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

export default function getWidgetContentByType(form, actions) {
  let { type, dateFrom, dateTo } = form || {};
  dateFrom = dateFrom?.slice(0, 16).replace("T", " ");
  dateTo = dateTo?.slice(0, 16).replace("T", " ");
  switch (type) {
    case WidgetTypes.ActionsTable:
      return <TableWidget actions={actions} />;
    case WidgetTypes.DataGrid:
      return <DataGrid budgetId={form.budget._id} actions={actions} />;
    case WidgetTypes.PChartWP:
      return (
        <PChartWP
          data={processPChartWP(actions)}
          dateFrom={dateFrom || findEarliest(actions)}
          dateTo={dateTo || findLatest(actions)}
        />
      );
    case WidgetTypes.TimeLineChart:
      return (
        <TimeLineChart
          data={processTimeLineChart(actions)}
          dateFrom={dateFrom || findEarliest(actions)}
          dateTo={dateTo || findLatest(actions)}
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
          dateFrom={dateFrom || findEarliest(actions)}
          dateTo={dateTo || findLatest(actions)}
        />
      );
    default:
      break;
  }
}
