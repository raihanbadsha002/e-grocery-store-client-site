import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, errors  } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {

        const productData = {
            pname: data.pname,
            wight: data.wight,
            price: data.price,
            quantity: data.quantity,
            imageURL: imageURL

        };

        const url = `https://pumpkin-pudding-80008.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => alert("Product Add Successfully"))

        
    };

    const handelImageUpload = event => {
      const imageData = new FormData();
      imageData.set('key', 'bf42fd7632cf6f7f9d130dcb0f0b47cb');
      imageData.append('image', event.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload',
        imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    return (
        <div className="container">
            <h2 className="my-4 bg-body py-4 px-3">Add Product</h2>
            <div className="product__Sec shadow p-3 mb-5 bg-body p-3 rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                      <label for="ProductName" className="form-label"> <h6>Product Name</h6></label>
                      <input type="text" name="pname" className="form-control" placeholder="Enter Name" ref={register({ required: true })} />
                      {errors.pname && <span className="text-danger">*Add Your Product Name</span>}
                    </div>
                    <div className="col-md-6">
                      <label for="Wight" className="form-label"> <h6>Wight</h6></label>
                      <input type="text" name="wight" className="form-control" placeholder="Enter Wight" ref={register({ required: true })} />
                      {errors.wight && <span className="text-danger">*Add Your Product Wight</span>}
                    </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                      <label for="AddPrice" className="form-label"> <h6>Add Price</h6></label>
                      <input type="text" name="price" className="form-control" placeholder="Enter Price" ref={register({ required: true })} />
                      {errors.price && <span className="text-danger">*Add Your Product Price</span>}
                    </div>
                  <div className="col-md-6">
                      <label for="AddQuantity" className="form-label"> <h6>Quantity</h6></label>
                      <input type="number" name="quantity" defaultValue="1" className="form-control" placeholder="Enter Price" ref={register({ required: true })} />
                      {errors.quantity && <span className="text-danger">*Add Your Product Quantity</span>}
                    </div>
                    
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                      <label for="AddPhoto" className="form-label"> <h6>Add Photo</h6></label> <br/>
                      <input name="photo" className="bg-primary p-1 text-white"  type="file" onChange={handelImageUpload} ref={register({ required: true })} />
                    </div>
                </div>
                <div className="text-right">
                    <input className="btn btn-success px-4 text-white" type="submit" value="Save"/>
                </div>
                   
                </form>
            </div>
           
        </div>
    );
};

export default AddProduct;