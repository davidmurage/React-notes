import React from 'react'

const listExample = () => {

    const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];


    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
</ul>
        </div>
    );
            
}

export default listExample;