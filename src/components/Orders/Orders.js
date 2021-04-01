import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import LoadingGif from '../../images/Spinner.gif';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetails, setOrderDetails] = useState([]);
    

    useEffect(() => {
        fetch('https://pumpkin-pudding-80008.herokuapp.com/buyerDetails?email='+loggedInUser.email, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
             
         }
     })
     .then(res => res.json())
     .then(data => setOrderDetails(data))
     
 
     }, [loggedInUser.email])

    return (
        <div className="container position-relative orderPage_height" >
         {
            orderDetails.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
          <div className="row d-flex justify-content-center">
               <h2 className="my-4 text-center shadow  bg-body rounded py-2">Hello, <span className="text-info">{loggedInUser.name}!</span>  Let's Check Your Order Details.</h2>

              <div className="col-md-10 shadow  bg-body rounded">
              <h6 className="text-center text-success pt-2">Email: {loggedInUser.email}</h6>
            <table className="table table-striped">
                
                <thead>
                    <tr>
                     <th scope="col">Product Name</th>
                     <th scope="col">Product Quantity</th>
                     <th scope="col">Product wight</th>
                     <th scope="col">Product Price</th>
                     <th scope="col">Order Time</th>
                    </tr>
                </thead>
                <tbody>
                   

                    {
                        orderDetails.map(pd => 
                       <>    
                        <tr>
                            <td>{pd.pname}</td>
                            <td>{pd.quantity}</td>
                            <td>{pd.wight}</td>
                            <td>${pd.price}</td>
                            <td>{pd.orderTime}</td>
                        </tr>
                    
                      </>  
                    
                        )  
                    }
                  
                    
                </tbody>
                </table>
                </div>
          </div>   
        </div>
    );
};

export default Orders;