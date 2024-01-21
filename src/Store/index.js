import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './Counter';
import AuthReducer from './Auth';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
  },
});

export default store;
//above we used reducers and all that reducers we take here using reducer as single, useSelector ke liye state.counter. ya state.auth. aise access krna h

// below we used redux above used redux toolkit and instead using reducer we use slice
// import { createStore } from "redux";

// const initialState = {counter: 0, showToggle: true};
// const countReducer = (state = initialState, action) =>{ //this is reducer function which takes prev state and dispatched action and returns new reducer state object that's why we return inside object
//     return {
//         if(action.type = 'increament'){
//             counter: counter + 1;
//             showToggle: state.showToggle
//         }
//         if(action.type = 'decreament'){
//             counter: counter + 1;
//             showToggle: state.showToggle
//         }
//         if(action.type = 'increase5'){
//             counter: counter + action.amount;
//             showToggle: state.showToggle
//         }
//         if(action.type = 'showToggle'){
//             counter: state.counter,
//             showToggle: !showToggle,
//         }
//     }
//     return state;
// }
// const store = createStore(countReducer);// createStore() creates store which takes reducer function as so that it got to know which reducer is changing the state

// export default store;
// //reducer returns new state not changed existing state
// //Action is an object with type property
