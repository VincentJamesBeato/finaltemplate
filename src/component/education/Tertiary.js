import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tertiary = () => {
    
    useEffect(() => {
        AOS.init();
      }, []);

    return ( 
        <div className="row">
            <div className="col-6">
                <ol data-aos="fade-up"
                data-aos-anchor-placement="bottom-center">
                    <li className="fs-2">College</li>
                        <ul>
                            <li className="fs-4">1st Year to Present, University of Baguio</li>
                        </ul>

                </ol>
            </div>

            <div className="col-6 d-flex justify-content-center">
                <img data-aos="flip-up" src={process.env.PUBLIC_URL + '/1.jpg'} alt="UB" width="370px" height="370px" className="rounded-5 border border-3 border-dark"/>
            </div>
        </div>
     );
}
 
export default Tertiary;