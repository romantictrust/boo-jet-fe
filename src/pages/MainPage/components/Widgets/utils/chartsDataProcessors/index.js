import { actionsCategories } from "../../../../constants";

export const processPChartWP = (actions) => {
  let wastage = { x: "Wastage", y: 0 };
  let profit = { x: "Profit", y: 0 };
  const processingActions = [...actions];
  processingActions.forEach((action) => {
    if (action.type === "wastage")
      wastage.y += Number(action.value.match(/\d/g).join(''));
    if (action.type === "profit")
      profit.y += Number(action.value.match(/\d/g).join(''));
  });
  return [wastage, profit];
};

export const processTimeLineChart = (actions) => {
  const data = [];
  const processingActions = [...actions];
  processingActions.forEach((action) => {
    const actionValue = Number(action.value.match(/\d/g).join(''));
    data.push({
      x: new Date(action.date).toLocaleDateString(),
      y: action.type === "wastage" ? -actionValue : actionValue,
      currency: action.value.replace(/[0-9]/g, ""),
      label: action.name,
    });
  });
  return data;
};

export const processCategoriesPie = (actions, isWastageCategories) => {
  const type = isWastageCategories ? "profit" : "wastage";
  let categories = actionsCategories.map((category) => ({
    x: category.name,
    y: 0,
    label: category.name,
  }));
  const processingActions = [...actions];
  processingActions.forEach((action) => {
    const actionValue = Number(action.value.match(/\d/g).join(''));
    if (action.type === type) {
      const catInd = categories.findIndex(
        (category) => category.label === action.category
      );
      categories[catInd].y += actionValue;
    }
  });
  const result = categories.filter((category) => category.y > 0);
  return result;
};
