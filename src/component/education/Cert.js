import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Cert = () => {

  return (
    <div className="d-flex justify-content-center">
        <div id="carouselExampleIndicators" class="carousel slide w-50" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={process.env.PUBLIC_URL + '/11.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/22.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/33.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/44.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/55.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/66.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/77.jpg'} class="d-block w-100 image-fluid rounded" alt="..." height="370" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}

export default Cert;
