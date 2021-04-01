
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import AdminBar from '../AdminBar/AdminBar';
import Edit from '../Edit/Edit';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <Router>
        <div className="bg-light">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-3"><AdminBar/></div>
                <div className="col-md-9">
                <Switch>
                    <Route exact path="/manage">
                      <ManageProduct />
                    </Route>
                    <Route path="/addProduct">
                      <AddProduct />
                    </Route>
                    <Route path="/edit">
                      <Edit />
                    </Route>
                </Switch>
                </div>
            </div>
        </div>   
        </div>
      </Router>
    );
};

export default Admin;