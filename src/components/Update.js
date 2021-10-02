import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Update() {

    const [updateForm, setUpdateForm] = useState('');
    const [error, setError] = useState(false);

    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3000/crud/${id}`)
        .then(response => setUpdateForm(response.data))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        if (updateForm.firstName.length > 0 && updateForm.lastName.length > 0) {
            axios.put(`http://localhost:3000/crud/${id}`, {
                firstName: updateForm.firstName,
                lastName: updateForm.lastName
            }).then(
                history.push('/')
            );
        } else {
            setError(true);
        }

    };

    const handleChange = (e) => {
        setUpdateForm({
            ...updateForm,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form className='update' onSubmit={handleUpdate} autoComplete='off'>
        {error && <p className='error'>erroooooooor</p>}
            <input
             type="text"
             placeholder='FirstName'
             value={updateForm && updateForm.firstName}
             name='firstName'
             onChange={handleChange} />  

            <input 
             type="text" 
             placeholder='LastName'
             value={updateForm && updateForm.lastName}
             name='lastName'
             onChange={handleChange} />

            <button className='update-btn' type='submit'>Update</button>  
            <button className='cancel-btn' type='submit'><Link to='/'>Back To Home</Link></button>  
        </form>
    )
}
