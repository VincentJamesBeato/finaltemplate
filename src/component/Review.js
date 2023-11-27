
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Review = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/Review')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

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
        <div className="p-5">
            <h1>Leave a Review</h1>
            <hr></hr>
            <br></br>

            <div className="d-flex justify-content-end text-primary mb-3">
                <Link to="/create" className="btn btn-outline-primary">Leave a Review</Link>
            </div>

            <div className="d-flex flex-column align-items-center">
                {
                    data.map((d, i) => (
                        <div class="card w-50 mb-3" key={i}>
                            <div class="card-header">
                                Review {d.id}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{d.name}</h5>
                                <p class="card-text">{d.review}</p>
                                <div class="d-flex justify-content-end">
                                    <Link to={`/read/${d.id}`} class="btn btn-primary btn-sm">View</Link>
                                    <Link to={`/update/${d.id}`} class="btn btn-warning btn-sm mx-3">Edit</Link>
                                    <button onClick={e => handleDelete(d.id)} class="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
     );
}
 
export default Review;