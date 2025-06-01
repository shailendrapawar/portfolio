import { createSlice, current } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"theme",
    initialState:{
        light:{
            name:"light",
            primary:"#2563EB",
            accent:"#00BFFF",
            background:"#F5F8FF",
            cardBackground:"#FFFFFF",
            secondaryAccent:"#A78BFA",
            textPrimary:"#0B0F2C",
            textSecondary:"#6B7280",
            border:"#D1D9E6",
            hover:"#00BFFF",
            shadow:"#2563EB",

            backgroundImage:"./assets/light-background.webp"
        },
        dark:{
            name:"dark",
            primary:"#2563EB",
            accent:"#00F0FF",
            background:"#0B0F2C",
            cardBackground:"#141C3A",
            secondaryAccent:"#7C3AED",
            textPrimary:"#FFFFFF",
            textSecondary:"#AAB4CF",
            border:"#2C3759",
            hover:"#00F0FF",
            shadow:"#7C3AED",

            backgroundImage:"./assets/dark-background.jpg"
        },
        currentTheme:{
       name:"dark",
            primary:"#2563EB",
            accent:"#00F0FF",
            background:"#0B0F2C",
            cardBackground:"#141C3A",
            secondaryAccent:"#7C3AED",
            textPrimary:"#FFFFFF",
            textSecondary:"#AAB4CF",
            border:"#2C3759",
            hover:"#00F0FF",
            shadow:"#7C3AED",

            backgroundImage:"./assets/dark-background.jpg"
        }
    },

    reducers:{
        toggleTheme:(state,action)=>{
            if(state.currentTheme.name=="light"){
                state.currentTheme=state.dark
            }else{
                state.currentTheme=state.light
            }
        }
    }
})

export const {toggleTheme}=slice.actions;
export default slice.reducer;