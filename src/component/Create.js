import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        review: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/Review', values)
        .then(res => {
            console.log(res);
            navigate('/review')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div className="p-5">
            <h1>Create Your Review</h1>
            <hr/>
            <br/>

            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="w-50 card p-3">
                    <div class="mb-3">
                        <label for="" class="form-label fw-bold">Name</label>
                        <input type="text" class="form-control" name="" id="" placeholder="Enter your name" onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label fw-bold">Review</label>
                        <textarea class="form-control" name="" id="" rows="3" placeholder="Enter your review" onChange={e => setValues({...values, review: e.target.value})}></textarea>
                    </div>
                    
                    <div className='d-flex justify-content-end'>
                        <Link to="/review" class="btn btn-outline-secondary mx-3">Go Back!</Link>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default Create;