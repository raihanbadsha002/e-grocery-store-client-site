import React, { useContext, useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { id } = useParams();
    const [checkout, setCheckout] = useState([]);
    const{quantity, pname, wight, price} = checkout;

    useEffect(() => {
        fetch(`https://pumpkin-pudding-80008.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [id])

    const submitOrder = () => {
        const orderDetails = {...loggedInUser, ...checkout, orderTime: new Date().toDateString('dd/MM/yyyy')}; 

        fetch('https://pumpkin-pudding-80008.herokuapp.com/orderProduct', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert("Successfully order submit")
          }
        })  
    }
    

    return (
        <div className="container-fluid bg-light" style={{height: "88vh"}}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <h1 className="my-4">Checkout</h1>
                    <table className="table table-striped shadow-lg p-5 mb-4 bg-body rounded">
                        <thead>
                            <tr>
                            <th scope="col" className="text-muted">Description</th>
                            <th scope="col" className="text-muted">Quantity</th>
                            <th scope="col" className="text-muted">Wight</th>
                            <th scope="col" className="text-muted">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{fontWeight: "bolder"}}>
                                <td>{pname}</td>
                                <td>{quantity}</td>
                                <td>{wight}</td>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th>${price}</th>
                            </tr>
                        </tbody>
                      </table>
                      <div className="text-right">
                         <button className="btn bg-success text-white px-4" onClick={submitOrder}><ShoppingCartIcon/> Checkout</button> 
                      </div>
                     
                </div>
            </div>
        </div>
    );
};

export default Checkout;