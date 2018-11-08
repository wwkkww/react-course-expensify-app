import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expences';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); 
    return store;
};
