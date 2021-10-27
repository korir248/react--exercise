import { addToCart } from '../redux/actions/cartActions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Products = ()=>{

    const cars = useSelector(state => state.car)
    console.log(cars)

    const cart = useSelector(state => state.cart)
    console.log(cart);
    

    const dispatch = useDispatch()
    
    const addingToCart=()=>{
        console.log("Added to Cart")   
        dispatch(addToCart)
    }

    return (
        <div className="single-car">
        {cars.map(singleCar=>(
        <div className="card">
        <div className="portrait">
        <img src={singleCar.image} alt="Car" height="400px" />
        </div>
            
            <p>Make: {singleCar.make}</p> 
            <p>Model: {singleCar.model}</p>
            <p>{singleCar.mileage}</p>
            <p>{singleCar.year_of_prod}</p>
            <p>Price: Ksh. {singleCar.price}</p>
            
            <button onClick={addingToCart}>Add to cart</button>
        </div>)
        )}
        </div>
    )

}

export default Products