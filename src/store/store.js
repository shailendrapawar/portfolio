import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./slices/themeSlice.js"
import projectReducer from "./slices/projects.js"
const rootReducer={
    theme:themeReducer,
    project:projectReducer
}

const myStore=configureStore({reducer:rootReducer});

export default myStore;