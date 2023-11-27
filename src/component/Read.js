import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([])

    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/Review/'+ id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to delete?");
        if(confirm){
            axios.delete('http://localhost:8000/Review/'+id)
            .then(res => {
                navigate('/review');
            })
            .catch(err => console.log(err));
        }
    }

    return ( 
        <div class='p-5'>
            <div className='d-flex justify-content-center'>
                <div class="card w-50 mb-3">
                    <div class="card-header">
                        Review {data.id}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Name: {data.name}</h5>
                        <p>Review:</p>
                        <p class="card-text">{data.review}</p>
                        <div class="d-flex justify-content-end">
                            <Link to={`/update/${data.id}`} class="btn btn-warning btn-sm mx-3">Edit</Link>
                            <button onClick={e => handleDelete(data.id)} class="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Link to="/review" class="btn btn-outline-secondary btn-sm mx-3">Go Back!</Link>
            </div>
        </div>
     );
}
 
export default Read;