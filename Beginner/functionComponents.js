import React from "react"

//function component
const Greeting = (props) => {
    return (
        <>
        <h1>{props.name}</h1>
        <p>{props.message}</p>
        </>
    )
}

export default Greeting;


//Application of function components

const App = () => {

    return (
        <div>
            <h2>Welcome to My React App!</h2>

             {/*using the greeting component*/}
            <Greeting name="John" message="Hello, how are you?" />
            <Greeting name="Jane" message="Hi, how's it going?" />
        </div>
    )
}


