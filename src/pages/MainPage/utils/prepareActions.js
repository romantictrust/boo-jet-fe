import actionsTypes, { actionsCategories } from "../constants";

export const humanizeActions = (actions, currency, dateFrom, dateTo) => {
  if (actions.length !== 0) {
    let processedActions = actions.map((action) => ({
      ...action,
      type: findNameById(action.type, "type"),
      category: findNameById(action.category, "category"),
      date: action.date.replace("T", " "),
      value: action.value + currency,
    }));

    processedActions =
      dateFrom && dateTo
        ? processedActions.filter((action) => {
            const actionDate = new Date(action.date).getTime();
            const earliestDate = new Date(dateFrom).getTime();
            const latestDate = new Date(dateTo).getTime();
            return actionDate > earliestDate && actionDate < latestDate;
          })
        : processedActions;
    return processedActions.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } else return [];
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
      value: action.value.replaceAll(/[^0-9]/g, ''),
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
