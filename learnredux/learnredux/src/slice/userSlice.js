import {createSlice} from "@reduxjs/toolkit"

const initialState={
    user: [],
};

export const userSlice=createSlice({
    name:"unique",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.user=[...state.user,action.payload]
        },
        deleteUser:(state,action)=>{
            state.user=state.user.filter((user,index)=>index!==action.payload)
        }
    }
})

export const {setUsers,deleteUser}=userSlice.actions;
export default userSlice.reducer;