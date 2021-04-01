import React, { useEffect, useState } from 'react';
import ShowAllProduct from '../ShowAllProduct/ShowAllProduct';
import LoadingGif from '../../images/Spinner.gif';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'https://pumpkin-pudding-80008.herokuapp.com/products'
        fetch(url)
               .then(res => res.json())
               .then(data => setProducts(data))
    }, []);

    return (
        <div className="bg-light">
           <div className="container position-relative">
             {
               products.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
               <div className="row py-5 d-flex justify-content-center">
                 <div className="col-10 col-md-8 col-lg-6">
                   <div class="input-group mb-3">
                        <input type="text" className="form-control py-2" placeholder="Search your product" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary px-5 py-2" type="button">Search</button>
                        </div>
                </div>
                   </div>
               </div>
               <div className="row ml-md-3">
                    {
                        products.map(product => <ShowAllProduct 
                        product={product}
                        key={product._id}/>)
                    }
                   
             </div>
           </div>
          
        </div>
    );
};

export default Home;