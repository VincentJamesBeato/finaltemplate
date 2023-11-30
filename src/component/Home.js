import { useEffect, useState } from "react";
import AOS from 'aos';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [values, setValues] = useState({
        title: '',
        date: '',
        description: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/Journal', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div>
            <div className="row">
                <div className="col d-flex justify-content-center mt-5">
                    <form onSubmit={handleSubmit} className="w-75 card p-3">
                        <div class="mb-3">
                            <label for="" class="form-label fw-bold">Journal Title</label>
                            <input type="text" class="form-control" name="" id="" placeholder="Enter Journal Title" onChange={e => setValues({...values, title: e.target.value})}/>
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label fw-bold">Date</label>
                            <input type="date" class="form-control" name="" id="" placeholder="Enter Date" onChange={e => setValues({...values, date: e.target.value})}/>
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label fw-bold">Journal Description</label>
                            <textarea class="form-control" name="" id="" rows="3" placeholder="Enter Description" onChange={e => setValues({...values, description: e.target.value})}></textarea>
                        </div>
                        
                        <div className='d-flex justify-content-end'>
                            <button type="submit" class="btn btn-outline-primary">Create Journal</button>
                        </div>
                        
                    </form>
                </div>
                <div className="col">2</div>
            </div>
        </div>
     );
}
 
export default Home;