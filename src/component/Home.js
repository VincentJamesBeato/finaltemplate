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
            <section  class="bg-light w-100 d-flex justify-content-center align-items-center sticky-top mb-0" style={{height: '75vh'}}>
                <h1 data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom" data-aos-mirror="false" style={{fontSize: '450%'}}>Hi, I'm Vincent James!</h1>
            </section>

            <section class="bg-dark text-light sticky-top p-5" style={{height: '100vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold fs-1">About Me</h1>
                <Basic_Info/>
            </section>

            <section class="bg-light sticky-top p-5" style={{height: '100vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold fs-1">Primary Education</h1>
                <Primary />
            </section>

            <section class="bg-dark text-light sticky-top p-5" style={{height: '100vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" data-aos-mirror="false" className="fw-bold text-end">Secondary Education</h1>
                <Secondary/>
            </section>

            <section class="bg-light text-dark sticky-top p-5" style={{height: '100vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold">Tertiary Education</h1>
                <Tertiary/>
            </section>

            <section class="bg-dark text-light sticky-top p-5" style={{height: '100vh'}}>
                <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-center" className="fw-bold">Awards and Certificates</h1>
                <Cert/>
            </section>

            <footer class="sticky-top text-light bg-secondary p-5" style={{height: '5vh'}}>

            </footer>
        </div>
     );
}
 
export default Home;