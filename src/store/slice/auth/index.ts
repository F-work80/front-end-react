import {createSlice} from "@reduxjs/toolkit";
import {IUserDataState} from "../../../common/types/auth";


const initialState:IUserDataState={
    user:{
            id:null,
            firstName:'',
            userName:'',
            userEmail:'',
            watchlist:[{
                id:null,
                name:'',
                assetId: '',
                createdAt:'',
                updatedAt: '',
                user: null
            } ],
            token:''
        },
    isLogged:false
}

export const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        login(state,action){
            state.user=action.payload
            state.isLogged=true
        }
    },
})

export const {login}=authSlice.actions
export default authSlice.reducer