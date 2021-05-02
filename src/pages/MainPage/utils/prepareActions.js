import actionsTypes, { actionsCategories } from "../constants";

export const humanizeActions = (actions, currency) => {
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

export const unHumanizeAction = (action) => {
  if (action) {
    let processedAction = {
      ...action,
      type: findIdByName(action.type, "type"),
      category: findIdByName(action.category, "category"),
      date: action.date.replace(" ", "T"),
      value: action.value.slice(0, action.value.length - 1),
    };
    return processedAction;
  } else return action;
};

const findIdByName = (name, fieldName) => {
  const area =
    fieldName === "type"
      ? actionsTypes
      : fieldName === "category"
      ? actionsCategories
      : [];

  const { id } = area.find((item) => item.name === name);
  return id;
};
