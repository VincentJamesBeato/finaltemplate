import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide.css theme


const Primary = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return ( 
        <div className="row">
            <div className="col-6">
                <ol>
                    <li className="fs-2">Kinder Garden</li>
                        <ul>
                            <li className="fs-4">Kinder Minds</li>
                        </ul>

                    <li className="fs-2">Pre School</li>
                        <ul>
                            <li className="fs-4">Mababang Paaralan ng Gumatdang</li>
                        </ul>

                    <li className="fs-2">Elementary I-VI</li>
                        <ul>
                            <li className="fs-4">Grade 1 - Albay Central School</li>
                            <li className="fs-4">Grade 2-6 - Mababang Paaralan ng Gumatdang</li>
                        </ul>
                </ol>
            </div>

            <div className="col-6 d-flex justify-content-center">
                {/* <img data-aos="flip-right" src={process.env.PUBLIC_URL + '/4.jpg'} alt="My Image" width="370px" height="370px" className="rounded-5 border border-3 border-light"/> */}
                <Splide options={{ 
      width       : 370, // Set the width of the main slider based on the image width
      height      : 370,
      isNavigation: false, // Disable navigation in the main slider
      pagination  : true,
      arrows      : true, // Enable arrows
      cover       : true,
    }}>
                    <SplideSlide className="d-flex justify-content-center rounded">
                        <img src={process.env.PUBLIC_URL + '/4.jpg'} alt="Slide 1" width="370px" height="370px" className="rounded-5 border border-3 border-dark"/>
                    </SplideSlide>
                    <SplideSlide className="d-flex justify-content-center">
                        <img src={process.env.PUBLIC_URL + '/3.jpg'} alt="Slide 2" width="370px" height="370px" className="rounded-5 border border-3 border-dark"/>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
     );
}
 
export default Primary;