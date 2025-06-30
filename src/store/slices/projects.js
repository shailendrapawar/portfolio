import { createSlice } from "@reduxjs/toolkit";
import allProjects from "../../utils/projects";

const slice=createSlice({

    initialState:[...allProjects],
    name:"projects",
    reducers:{
        
    }
})

const {}=slice.actions;
export default slice.reducer;
