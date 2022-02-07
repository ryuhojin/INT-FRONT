import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import reducer from "./modules";
import thunk from "redux-thunk";

const makeStore = () => configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), thunk],
    devTools: process.env.NODE_ENV != 'production'
})

const wrapper = createWrapper(makeStore, {});
export default wrapper;