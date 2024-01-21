import { createSlice } from "@reduxjs/toolkit";
//this slice if just for authentication check and we will create many slices as per need and import in index store
const initialAuthState = {isAuthenticated: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){//suupose waha login button click hui to ye fucntion access kiye dispatch(authActions.login) se aur state true ho gya aur fir useSelector me ye true liye variable me aur show kr diye login h
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

export default authSlice.reducer;
export const authActions = authSlice.actions;//actions dispatch krne ke liye ye import karenge