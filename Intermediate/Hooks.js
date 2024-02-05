import React, { useState, useEffect } from 'react';

const Hooks = () => {

    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1)
    }

    // Effect hook for handling side effects
    useEffect(() =>{

        // This function will be called after every render
        document.title = `Count : ${count}`


        
    // Cleanup function (optional)
    return () => {
        document.title = `React App`;
    }

    }, [count]);


    return(
        <div>
            <h1>React Hooks management</h1>
            <p>Count: {count}</p>
             <button onClick={increament}>Increament</button>
            </div>
    )
}