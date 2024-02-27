//passing data from parent component to child component(props)
import React from "react"


const ParentComponent = () => {
    return (
        <div>
            <h2>Welcome to My React App!</h2>
            <ChildComponent name="John" message="Hello, how are you?" />
            <ChildComponent name="Jane" message="Hi, how's it going?" />
        </div>
    )
}

const ChildComponent = (props) => {
    return (
        <>
        <h1>{props.name}</h1>
        <p>{props.message}</p>
        </>
    )
}


export default ParentComponent;