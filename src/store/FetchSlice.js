import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, {dispatch, rejectWithValue}){
        dispatch(preloaderOn())
        const options ={
         method: 'POST',
         headers: {
             "Content-Type": "application/json",
         },
            body: JSON.stringify(info)
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, options)
        const data = response.json()
        dispatch(preloaderOff())
        console.log(data)
    }
)

const fetchSlice = createSlice({
    name: 'fetchSlice',
    initialState: {
        preloader: false
    },
    reducers: {
        preloaderOn: (state) => {
            state.preloader = true
        },
        preloaderOff: (state) => {
            state.preloader = false
        }
    }
})


export const {preloaderOn, preloaderOff}  = fetchSlice.actions
export default fetchSlice.reducer