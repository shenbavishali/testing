import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name:'theme',
  initialState:{value:{color:'red'}},
  reducers:{
    colorChange:(state,action)=>{
      state.value = action.payload
    }
  }

})

export const {colorChange} = themeSlice.actions;
export default themeSlice.reducer;
