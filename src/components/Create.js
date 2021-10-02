import axios from "axios";
import { useState } from "react";

export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (firstName.trim().length > 0 && lastName.trim().length > 0) {
            axios.post('http://localhost:3000/crud', {
                id: Math.random(),
                firstName,
                lastName
            });
            setFirstName('');
            setLastName('');
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <form className='create' onSubmit={handleCreate} autoComplete='off'>
            {error && <p className='error'>error</p>}
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
