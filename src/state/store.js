// import { applyMiddleware, createStore } from "redux";
// import reducers from "./reducers";
// import { thunk } from "redux-thunk";
// import { configureStore } from '@reduxjs/toolkit';



// export const store = createStore(reducers, {}, applyMiddleware(thunk))

// import { applyMiddleware, createStore } from "redux";
// import reducers from "./reducers";
// import { thunk } from "redux-thunk";
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore(reducers, {}, applyMiddleware(thunk))

import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({
  reducer: reducers
});

