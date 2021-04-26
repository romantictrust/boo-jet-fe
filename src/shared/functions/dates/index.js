export const findEarliest = (actions) => {
  if (actions.length !== 0) {
    let sortedActions = [...actions];
    sortedActions.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return sortedActions[0].date;
  } else return new Date(Date.now()).toISOString().slice(0, 16);
};
