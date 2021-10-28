import { addToCart } from '../redux/actions/cartActions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Products = ()=>{
    const cars = useSelector(state => state.car)
    
    // console.log(cars)
    
    const myCart = useSelector(state => state.cart)
    // console.log(myCart);
    

    const dispatch = useDispatch()
    
    const addingToCart=()=>{
        dispatch(addToCart)
        console.log("Added to Cart")
        console.log(myCart);
         
    }
    console.log(cars)
    return (
        <div className="container">
        <div className="single-car">
        {cars.map(singleCar=>(
        <div className="card" key={singleCar.id}>
            <div className="portrait">
            <img className="car-image" src={singleCar.image} alt="Car" height="400px"/>
            </div>
            <div>
                <p>Make: {singleCar.make}</p> 
                <p>Model: {singleCar.model}</p>
                <p>{singleCar.mileage}</p>
                <p>{singleCar.year_of_prod}</p>
                <p>Price: Ksh. {singleCar.price}</p>

            </div>
                
                
                <button className="addtoCartBtn button" onClick={addingToCart}>Add to cart</button>
            </div>)
            )}
            </div>
        </div>
    )

}

export default Products