import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // Fetch data from an API

        const fetchData = async () => {
            try {
                const response = await fetch('https://json')
                const data = await response.json();
                setData(data);
                setIsLoading(false);

            }catch (error) {
                console.log('Error fetching data', error);
            }
        }

        fetchData();
}, [])

return (
    <div>
        {isLoading ? (
        <p>Loading...</p> 
        ) : (
            <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
    </div>
    )


}