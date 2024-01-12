import { createSlice } from "@reduxjs/toolkit";    




const initialState = {
    arr: [{_id:111,price:344,name:"english"},{_id:222,price:899,name:"math"}]
       
}
export const courseSlice = createSlice({
    name: "course",//השם הזה רלוונטי רק לדב טולס
    initialState,
    reducers: {
 addToArr: (state, action) =>{
            state.arr.push(
                {

                    ...action.payload,_id:state.arr[state.arr.length-1]+1
                 
                }
            )
        },
        removeFromArr: (state, action) => {
            let index = state.arr.findIndex(item =>item._id ==
action.payload)
            state.arr.splice(index, 1);
        },
updateArr:(state, action) => {
                let index = state.arr.findIndex(item =>item._id ==
                action.payload._id)
                state.arr.splice(index, 1, action.payload);
            },

    },
})
// Action creators are generated for each case reducer function
export const { addToArr, removeFromArr,updateArr } = courseSlice.actions
export default courseSlice.reducer