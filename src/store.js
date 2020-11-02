import {createStore , combineReducers} from 'redux';
import reducer from'./reducers/reduce';
const rootReducer = combineReducers({reducer})
const enhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
  const store = createStore(
    rootReducer,
    enhancers
  );
export default store;