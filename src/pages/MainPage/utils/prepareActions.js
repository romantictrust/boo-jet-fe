import actionsTypes, { actionsCategories } from "../constants";

export const prepareActions = (actions, currency) => {
  let processedActions = actions.map((action) => ({
    ...action,
    type: findNameById(action.type, "type"),
    category: findNameById(action.category, "category"),
    date: action.date.replace("T", " "),
    value: action.value + currency,
  }));
  return processedActions;
};

const findNameById = (id, fieldName) => {
  const area =
    fieldName === "type"
      ? actionsTypes
      : fieldName === "category"
      ? actionsCategories
      : [];

  const { name } = area.find((item) => item.id === id);
  return name;
};
