export default function createStore(reducer) {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  };

  const getState = () => {
    return state;
  };

  dispatch({ type: "@@INIT" })

  return {
    dispatch,
    getState
  }

};

// let store = createStore();

function render() {
  const container = document.getElementById('container');
  // container.textContent = store.getState().count;
};
