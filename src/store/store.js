import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "../store/slices/themeSlice.js"

const rootReducer={
    theme:themeReducer
}

const myStore=configureStore({reducer:rootReducer});

export default myStore;