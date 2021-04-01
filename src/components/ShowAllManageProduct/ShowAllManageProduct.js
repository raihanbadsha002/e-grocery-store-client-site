import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ShowAllManageProduct = ({product, fetchProductList}) => {

    const deleteItem = (id) => {
        
        fetch(`https://pumpkin-pudding-80008.herokuapp.com/deleteItem/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => fetchProductList())
        
    }

    return (
        <div className="d-flex">
          <div className="col-md-3 mb-3">
             <h6>{product.pname}</h6>
          </div>
          <div className="col-md-3 text-center mb-3">
            <span>{product.wight}</span>
          </div>
          <div className="col-md-3 text-center mb-3">
             <span>${product.price}</span>
          </div>
          <div className="col-md-3 text-center mb-3">
            <span> <span style={{cursor: "pointer"}} className="bg-success text-white p-1"><EditIcon/></span>  <span className="bg-danger text-white p-1" style={{cursor: "pointer"}} onClick={() => deleteItem(product._id)}><DeleteForeverIcon/></span></span>
          </div>
         
        </div>
    );
};

export default ShowAllManageProduct;