//state management 

//summary: -State is used to manage the internal data of a component. Unlike props, 
//-which are passed from parent to child, state is managed within a component and can be updated over time.

import React,{useState} from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)
    
    const increment = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
            
    )
}


//Managing component state and passing data

import React from "react"

const ParentComponent = () => {

    const [ParentCount, setParentCount] = useState(0);

    const handleIncreament = () => {
    setParentCount(ParentCount + 1);
    };

    return (
        <div>
            <h2>ParentCount:  {ParentCount}</h2>
            {/*Pass ParentCount  as prop to the childComponent*/}
            <ChildComponent count={ParentCount} onClick={handleIncreament}/>
        </div>
    )
}

// Child Component
const ChildComponent = (props) => {
    return (
      <div>
        <p>Child Count: {props.count}</p>
        <button onClick={props.onIncrement}>Increment in Parent</button>
      </div>
    );
  };
  
export default ParentComponent;