import React  from 'react';
import { useHistory} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ShowAllProduct = ({product}) => {

    const history = useHistory();

    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4 col-12 ml-md-0 ml-5">
             <div className="card shadow  bg-body rounded" style={{width: "18rem"}}>
                    <img src={product.imageURL}  className="card-img-top" alt="..."/>
                 <div className="card-body"> 
                        <h6 className="card-title">{product.pname}</h6>
                        <div className="d-flex justify-content-around mt-3">
                            <span className="text-success" style={{fontSize: "1.6rem", fontWeight: "bolder"}}>${product.price}</span>
                            <button onClick={() => history.push(`/checkout/${product._id}`)} className="btn btn-primary px-3"><AddShoppingCartIcon/> Buy Now</button>
                            
                        </div>
                    </div>
             </div>
                 
            </div>
       
        </>
    );
};

export default ShowAllProduct;