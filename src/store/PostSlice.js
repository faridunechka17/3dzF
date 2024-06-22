import React from 'react';
import { createSlice} from "@reduxjs/toolkit";



const PostSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        num: 0
    },
    reducers: {
        postsInfoBack: (state, action) => {
            state.postsTitle = action.payload
        },
        numMax: (state, action) => {
            state.num += action.payload
        },
        numMin: (state, action) => {
            state.num = Math.max(state.num - action.payload, 0)
        },
        numReset: (state) => {
            state.num = 0
        }
    }
})

export const {numMax, numMin, numReset} = PostSlice.actions

export default PostSlice.reducer
