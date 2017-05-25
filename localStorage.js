export const loadState = () => {
  try {
    const fetchSerializedState = localStorage.getItem('ad');

    if (fetchSerializedState === null) {
      return [];
    }

    return JSON.parse(fetchSerializedState);
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
