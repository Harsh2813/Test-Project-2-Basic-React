import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};// acc. to need we can take empty array or value etc.

const counterSlice = createSlice({//createSlice takes object of name which is key type of that slice
    name: 'counter',
    initialState: initialCounterState,
    reducers: {//here we declared all are reducers in reducers object we don't need to give action.type to all that
        increament(state){//in reducx we were doint return{state=state.counter=1} so that imutablity don't change
            state.counter++;//in redux we don't have to change existing state same here but here we can write like
        },//we are writing it is also imutable which don't change redux toolkit will return new or overwrite it
        decreament(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){//this takes previous state and gives updated state if we pass state inside().
            state.showCounter = !state.showCounter;
        }
    }
})

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;//this is action creater we can access all aut reducers method