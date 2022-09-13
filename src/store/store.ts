//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import { updateTodos } from './updateTodos';

// const rootReducer = combineReducers({
//   data: updateTodos,
// });

export const store = configureStore({
  reducer: {
    data: updateTodos,
  },
  middleware: [],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

//const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
