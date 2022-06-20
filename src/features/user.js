import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{value:{name:'shenba',age:0,email:''}},
    reducers:{
        login:(state,action)=> {
            state.value = action.payload         
        },
        logout:(state,action) => {
            state.value = {value:{name:'',age:0,email:''}}
        }

    }

});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;
