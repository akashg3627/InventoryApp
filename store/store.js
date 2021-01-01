import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import groupsReducer from './reducers/groups';
import inventoryReducer from './reducers/inventory';

const rootReducer = combineReducers({
  groups: groupsReducer,
  inventory: inventoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
