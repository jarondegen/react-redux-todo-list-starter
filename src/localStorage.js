const STATE_KEY = 'tasks';

export const loadState = () => {
  try {
    const stateJson = localStorage.getItem(STATE_KEY);
    if (!state) {
      return undefined;
    }
    const state = JSON.parse(stateJson);
    return state;
  }catch(err) {
    console.warn(err);
  }
  // TODO: Try to access the stored tasks state from local storage
  // TODO: If there is no state found, return `undefined`
  // TODO: If the state was found, return the state (parsed into JavaScript)

  // TODO: Catch any errors with a `console.warn` statement and return undefined
};

export const saveState = (state) => {
  try{
    const stateJson = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, stateJson);
  }catch(err) {
    console.warn(err);
  }
    // TODO: Try to parse the state from JavaScript into a JSON string
  // TODO: Set the JSON string into local storage

  // TODO: Catch any errors with a `console.warn` statement
};