{/*Lifting state up in React refers to the practice of managing the state of a component 
in a higher-level component and passing that state down as props to child components.*/} 

import React, { useState } from 'react';

//child component
const ChildComponent = ({count, onIncreament}) => {
    return (
        <div>
            <h1>childComponent</h1>
            <p>Count: {count}</p>
            <button onClick={onIncreament}>Increament</button>
        </div>
    );
}


const ParentComponent = () => {

    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Lifting up state</h1>

            {/* Child components receive 'count' and 'onIncrement' as props */}
            <ChildComponent count={count} onIncreament={handleIncreament} />
        </div>
    );
}