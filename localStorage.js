export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    console.log("fetched serialized state", serializedState)
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("serializedState", serializedState)

    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log("err", err)
  }
}
