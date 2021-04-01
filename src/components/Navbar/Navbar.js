import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><h2 className="text-white">e-GROCERY<span className="text-success">STORE</span></h2> </Link>
                        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item ml-3">
                        <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                        </li>  
                        <li className="nav-item ml-3">
                        <Link className="nav-link text-white"  to="/orders">Orders</Link>
                        </li>  
                        <li className="nav-item ml-3">
                        <Link className="nav-link text-white"  to="/admin">Admin</Link>
                        </li>  
                        <li className="nav-item ml-3">
                          <Link className="nav-link btn btn-primary text-white px-4"  to="/login">Login</Link>
                        </li>  
                        <li className="nav-item ml-3">
                          <Link className="nav-link"  to="/"> <img className="img-fluid rounded-circle" style={{width: "35px"}} src={loggedInUser.image} alt=""/></Link>
                        </li>  
                    </ul> 
                    </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;