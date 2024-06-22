import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {numMax, numReset, numMin} from "../../store/PostSlice";

const CreatePostPage = () => {

    const dispatch = useDispatch()
    const num = useSelector(state => state.PostSlice.num)

    return (
        <div>
            <p>{num}</p>
            <button onClick={() => dispatch(numMax(1))}>+ 1</button>
            <button onClick={() => dispatch(numMin(1))}>- 1</button>
            <button onClick={() => dispatch(numMax(10))}>+ 10</button>
            <button onClick={() => dispatch(numMin(10))}>- 10</button>
            <button onClick={() => dispatch(numReset(0))}>0</button>
        </div>
    );
};

export default CreatePostPage;