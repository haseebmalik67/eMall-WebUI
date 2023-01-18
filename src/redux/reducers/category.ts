import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../dtos/category";


const initialState: Category = {
    id:0,name:'',description:'',createdDate:new Date()
}

export const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{
        setCategory:(state,action:PayloadAction<Category>)=>{
           state.id=action.payload.id;
           state.name=action.payload.name;
           state.description=action.payload.description;
        }
    }
})

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
