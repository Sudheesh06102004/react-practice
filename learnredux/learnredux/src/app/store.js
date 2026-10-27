import {configureStore} from "@reduxjs/toolkit";
import { useReducer } from "react";
import useReducer  from "../slice/userSlice";

const store=configureStore({
    reducer:{
        userInfo: useReducer,
    }
})

export default store;