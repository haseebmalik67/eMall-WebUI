
import { configureStore } from "@reduxjs/toolkit";
import category from "./reducers/category";

const   store= configureStore({
    reducer:{
        category
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.createdDate'],
        // Ignore these paths in the state
        ignoredPaths: ['category.createdDate'],
      },
    })
})
export default store;
export type TStore = ReturnType<typeof store.getState>;