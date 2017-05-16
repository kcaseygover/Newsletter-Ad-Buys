export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('ad');
    console.log("fetched serialized state", serializedState)
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('fetched err')
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("serializedState", serializedState)

    localStorage.setItem('ad', serializedState);
  } catch (err) {
    console.log("err", err)
  }
}
