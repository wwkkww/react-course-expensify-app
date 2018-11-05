import { createStore } from 'redux';

const incrementCount =({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  }
};

const decrementCount =({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
};

const setCount =({ count } = {}) => {
  return {
    type: 'SET',
    count: count
  }
};

const resetCount =() => {
  return {
    type: 'RESET'
  }
};

//Reducers
//1. Reducers are pure function (did not depend on outside variable)
//2. never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT' :
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
      count: state.count + incrementBy      
    };
    case 'DECREMENT' :
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count: state.count - decrementBy     
    };
    case 'RESET' :
    return {   
      count: 0
    };
    case 'SET' :
    return {   
      count: action.count
    };
    default:
    return state;
  }
};



const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log('subscribe', store.getState())
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount( {incrementBy : 5} ));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 100} ));

store.dispatch(setCount( {count: 101} ));


// store.dispatch({
//   type: 'SET',
//   count: 101
// });
