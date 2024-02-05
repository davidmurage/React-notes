import React, {useState} from "react"


const formExample = () => {
    //set variables to manage form data
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    // Event handler for input changes in the form
    const handleInputChange = (e) => {
        // Dynamically update state based on input field name
        if(e.target.name === "username"){
            setUsername(e.target.value)
        } else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    };

    //Event handler for form submission
        const handleSubmit = (e) => {
            e.preventDefault(); // Prevents the default form submission behavior


            // Do something with the form data (e.g., send it to a server)
            console.log("Form submitted with: ");
            console.log("Username", username);
            console.log("Password", password);

            //Reset the form fields after submission
            setUsername("")
            setPassword("")
        }

        return(
            <div>
                <h1>Form submission</h1>

                 {/* Form element with input fields and submit button */}
                 <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                      <input 
                         type = "text"
                         name = "username"
                         value = {username}
                         onChange = {handleInputChange}
                        />
                        </label>

                        <br />
                        <label>
                            Password:
                            <input 
                            type = "password"
                            name = "password"
                            value = {password}
                            onChange = {handleInputChange}
                            />
                    <br />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>

        )

        
}