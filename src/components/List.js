import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function List() {

    const [crudList, setCrudList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/crud')
        .then(response => setCrudList(response.data))
    }, [crudList])

    const handleDeleteCrud = (id) => {
        axios.delete(`http://localhost:3000/crud/${id}`)
    }

    return (
        <section>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {crudList.length > 0 ? crudList.map(item => (
                            <tr>
                            <th scope="row">{item.id.toFixed(3)}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>
                            <button><Link to={`/update/${item.id}`}>Update</Link></button>
                            <button onClick={() => handleDeleteCrud(item.id)} >Delete</button>
                            </td>
                            </tr>
                        )) : <th style={{textAlign:'center'}} colSpan={4} scope="row">CRUD is empty</th>
                        }
                </tbody>
            </table>
        </section>
    )
}
