import { createBrowserHistory as createHistory } from "history";
import ReduxThunk from "redux-thunk";
// import { connectRouter } from 'connected-react-router';

import { connectRouter, routerMiddleware } from "connected-react-router";
import appReducer from "../action-reducer/appReducer";
import { middlewareReducer } from "./middleware";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

export const history = createHistory();
const middlewareRouter = [ReduxThunk, routerMiddleware(history)];

const reducer = combineReducers({
  ...appReducer,
  router: connectRouter(history)
});

const rootReducer = middlewareReducer(reducer);

// const rootReducer = reducer;

// eslint-disable-next-line dot-notation
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewareRouter)));

export default store;
