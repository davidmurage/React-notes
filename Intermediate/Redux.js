{/* Redux is a state management library commonly used with React to handle the application state in a more organized and predictable way. 
It helps manage the state of your application in a central store, making it easier to maintain, debug, and scale.*/}

//code implementation of redux
import { createStore } from 'redux';

// Define the initial state of the application
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return { count: state.count + 1 };
        case 'DECREMENT':
        return { count: state.count - 1 };
        default:
        return state;
    }
}

// Create a Redux store
const store = createStore(counterReducer);


//intergrate Redux with React
import React from 'react';
import  {useDispatch, useSelector} from 'react-redux';
import store from './store';

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </div>
    );
}