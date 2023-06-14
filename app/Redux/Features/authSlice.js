import { createSlice } from "@reduxjs/toolkit"

const initialState ={
 value:{
  isAuth:false,
  username:"",
 }
}

export const auth = createSlice({
 name: "auth",
 initialState,
 reducers:{
  logOut: ()=> {
   return initialState
  },
 }
})

export const {logOut,} = auth.actions
export default auth.reducer