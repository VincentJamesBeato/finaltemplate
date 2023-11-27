import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams();

    const [values, setValues] = useState({
        name: '',
        review: ''
    })

    useEffect(() => {
        axios.get('http://localhost:8000/Review/'+ id)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8000/Review/'+ id, values)
        .then(res => {
            console.log(res);
            navigate('/review')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div class="p-5">
            <h1>Review is Currently on Edit</h1>
            <hr/>
            <br/>

            <div class="d-flex justify-content-center">
                <form onSubmit={handleUpdate} className="card p-3 w-50">
                    <div class="mb-3">
                        <label for="" class="form-label fw-bold">Name</label>
                        <input type="text" class="form-control" value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label fw-bold">Review</label>
                        <textarea class="form-control" rows="3" value={values.review} onChange={e => setValues({...values, review: e.target.value})}></textarea>
                    </div>

                    <div className="d-flex justify-content-end">
                        <Link to="/review" class="btn btn-outline-secondary me-3" role="button">Cancel</Link>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Update;