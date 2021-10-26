import { myCars } from "./Cars";

const Products = ()=>{
    const car = myCars.map(singleCar=>(
        <div className="card">
            <img src={singleCar.image} alt="Car"></img>
            <p>Make:{singleCar.make}</p> 
            <p>Model:{singleCar.model}</p>
            <p>{singleCar.mileage}</p>
            <p>{singleCar.year_of_prod}</p>
            <p>Price: Ksh. {singleCar.price}</p>
        </div>)
        );

    return (
        <div className="single-car">
        {car}
        </div>
    )

}

export default Products