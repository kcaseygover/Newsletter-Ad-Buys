export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('ad');
    console.log("fetched serialized state", serializedState)
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('fetched err')
    return [];
  }
};

export const saveState = (state) => {
  try {
    let ads = JSON.parse(localStorage.getItem('ad')) || [];
    console.log("ads", ads)
    ads.push(state);
    console.log("ads2", ads)
    const serializedState = JSON.stringify(ads);
    console.log('serializedState', serializedState)
    localStorage.setItem('ad', serializedState);
  } catch (err) {
    console.log("err", err)
  }
}
