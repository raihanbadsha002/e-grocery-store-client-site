import React, { createContext, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import Edit from "./components/Edit/Edit";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
  <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
        <Router>
          <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
                  <Checkout />
           </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/manage">
              <ManageProduct />
          </Route>
          <Route path="/addProduct">
              <AddProduct />
          </Route>
          <Route path="/edit">
                  <Edit />
              </Route>
          <Route path="*">
            <h1 className="text-danger text-center my-5 py-5">404 Page not found</h1>
          </Route>
        </Switch>
        <Footer/>
    </Router>
</UserContext.Provider>
  );
}

export default App;
