import React from 'react';
import {
    Link
  } from "react-router-dom";
  import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
  import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
  import EditIcon from '@material-ui/icons/Edit';
  import './AdminBar.css'

const AdminBar = () => {
    return (
        <div className="bg-dark adminBar_height">
            <ul className="navbar-nav p-5">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/manage"><AppsOutlinedIcon/> Manage Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/addProduct"><AddOutlinedIcon/>  Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/edit"><EditIcon/>  Edit Product</Link>
            </li>
          </ul>
        </div>
    );
};

export default AdminBar;