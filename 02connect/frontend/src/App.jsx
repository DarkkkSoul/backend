import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get('/api/details')
            .then((response) => {
                setDetails(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <>
            <h1>hello world!</h1>
            <h2>Details: {details.length}</h2>
            {
                details.map((det) => (
                    <div>
                        <p>ID: {det.id}</p>
                        <h3>Name: {det.name}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default App
