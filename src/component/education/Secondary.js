import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Secondary = () => {
    
    useEffect(() => {
        AOS.init();
      }, []);

    return ( 
        <div className="row">
            <div className="col-6 d-flex justify-content-center">
                <img data-aos="flip-up" src={process.env.PUBLIC_URL + '/5.jpg'} alt="My Image" width="370px" height="370px" className="rounded-5 border border-3 border-light"/>
            </div>

            <div className="col-6">
                <ol data-aos="fade-up"
                data-aos-anchor-placement="bottom-center">
                    <li className="fs-2">Junior High School</li>
                        <ul>
                            <li className="fs-4">1st Year Saint Loius School of Pacdal</li>
                            <li className="fs-4">2nd - 4th Year Computer Arts Technological College</li>
                        </ul>

                    <li className="fs-2">Senior High School</li>
                        <ul>
                            <li className="fs-4">University of Baguio</li>
                        </ul>

                </ol>
            </div>
        </div>
     );
}
 
export default Secondary;