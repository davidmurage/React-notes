//code implementation of conditionals
import React, { useState } from 'react'

const ConditionalRendering = () => {

    const[isLoggedIn, setLoggedIn] = useState(false)


    const handleLogginToggle = () => {
        setLoggedIn(!isLoggedIn);
    }

    return(
        <div>
            <h2>Conditional Rendering</h2>
            {/*conditional rendering based on isLoggedIn state*/}
            {isLoggedIn ? (<p>Welcome, User!, You are logged in</p>
            ):(
            <p>Please login to access content</p>
            )}

            {/* Button to toggle the login state */}
       <button onClick={handleLogginToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      </div>
    );
    
}

{/* Conditional rendering is applied in various scenarios:

1.User Authentication: Display different content based on whether the user is logged in or not.

2.Form Validation: Show error messages or submit buttons conditionally based on form validation.

3.Loading Data: Display loading indicators or content based on whether data has been loaded.*/}