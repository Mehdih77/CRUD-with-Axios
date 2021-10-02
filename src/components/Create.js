import axios from "axios";
import { useState } from "react";

export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/crud', {
            id: Math.random(),
            firstName,
            lastName
        });
        setFirstName('');
        setLastName('');
    };

    return (
        <form className='create' onSubmit={handleCreate}>
            <input
             type="text"
             placeholder='FirstName'
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)} />  

            <input 
             type="text" 
             placeholder='LastName'
             value={lastName}
             onChange={(e) => setLastName(e.target.value)} />

            <button type='submit'>Create</button>  
        </form>
    )
}
