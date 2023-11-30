import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Primary from "./education/Primary";
import Secondary from "./education/Secondary";
import Tertiary from "./education/Tertiary";
import Basic_Info from "./education/Basic_Info";
import Cert from "./education/Cert";

const Home = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return ( 
        <div>
            <section class="bg-light w-100 d-flex flex-column justify-content-center align-items-center sticky-top mb-0" style={{height: '75vh'}}>
                <div>
                    
                    
                    
                    {/* <div className="row">
                        <div className="col p-0">
                            <p className="fw-semibold m-0" style={{rotate: '90deg', fontSize: 180}}>20</p>
                        </div>
                        <div className="col-8">
                            <h1 style={{fontSize: 80}}>Hi I'm Vincent James Beato</h1>
                            <p className="fw-semibold fs-2">3rd Year BSCS Student</p>
                        </div>
                    </div> */}

                    <div className="d-flex">
                        <div data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" className="p-0">
                            <p className="fw-bolder m-0" style={{rotate: '90deg', fontSize: 180}}>20</p>
                        </div>
                        <div className="">
                            <h1 data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" style={{fontSize: 120}}>Vincent James Beato</h1>
                            <p data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" className="fw-semibold" style={{fontSize: 50, letterSpacing: 30}}>3rd Year BSCS Student</p>
                        </div>
                    </div>

                </div>
            </section>

            <section class="bg-dark text-light sticky-top p-5 border-top border-5 border-danger">
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold fs-1 text-center">About Me</h1>
                <hr/>
                <Basic_Info/>
            </section>

            <section class="bg-light sticky-top p-5 border-top border-5 border-warning" style={{height: '65vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold fs-1 text-center">Primary Education</h1>
                <hr/>
                <Primary />
            </section>

            <section class="bg-dark text-light sticky-top p-5 border-top border-5 border-danger" style={{height: '65vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold text-end text-center">Secondary Education</h1>
                <hr/>
                <Secondary/>
            </section>

            <section class="bg-light text-dark sticky-top p-5 border-top border-5 border-warning" style={{height: '65vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold text-center">Tertiary Education</h1>
                <hr/>
                <Tertiary/>
            </section>

            <section class="bg-dark text-light sticky-top p-5 border-top border-5 border-danger" style={{height: '100vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold">Awards and Certificates</h1>
                <hr/>
                <Cert/>
            </section>

            <footer class="sticky-top text-light bg-secondary p-5" style={{height: '5vh'}}>

            </footer>
        </div>
     );
}
 
export default Home;