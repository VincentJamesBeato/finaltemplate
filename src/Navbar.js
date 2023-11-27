import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (  
        <div>
            <navbar class="">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand disabled" href="#">VJPB</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active" aria-current="page" href="#">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/review" class="nav-link active" aria-current="page" href="#">Review</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </navbar>
            <Outlet/>
        </div>
    );
}
 
export default Navbar;