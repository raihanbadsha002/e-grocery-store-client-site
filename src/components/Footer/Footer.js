import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-center py-3 text-white mt-4">
            <p><Link to="/"  className="text-white" >e-GROCERY<span className="text-success">STORE ©</span></Link> All rights reserved.</p>
        </div>
    );
};

export default Footer;