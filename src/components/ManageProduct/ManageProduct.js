import React, { useEffect, useState } from 'react';
import ShowAllManageProduct from '../ShowAllManageProduct/ShowAllManageProduct';
import LoadingGif from '../../images/Spinner.gif';


const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    const fetchProductList = () => {
        if (!url) {
           return 
        } 
     }


    const url = 'https://pumpkin-pudding-80008.herokuapp.com/products'
    fetch(url)
           .then(res => res.json())
           .then(data => setProducts(data)) 
   
   

    useEffect(() => {
        fetchProductList()
    }, []);

    return (
        <div className='container position-relative'>
         {
               products.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
            <h2 className="my-4 bg-body py-4 px-3">Manage Product</h2>
            <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="row bg-light py-2 rounded shadow mb-4">
              <div className="col-md-3">
                    <h6>Product Name</h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>Wight</h6>
                </div>
               <div className="col-md-3 text-center">
                 <h6>Price</h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>Action</h6>
               </div>
                                 
             </div>
             
             <div className="row">
             {
                products.map(product => <ShowAllManageProduct 
                product={product}
                key={product._id}
                fetchProductList={fetchProductList}    
                />)
              }
             </div>
              
            </div>
        </div>
    );
};

export default ManageProduct;