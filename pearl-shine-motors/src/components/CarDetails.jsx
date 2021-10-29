import React from 'react'
import { useParams } from "react-router";
import { useSelector } from 'react-redux';

const CarDetails = () => {
    const {cars} = useSelector(state => state.cart)
    const carId = useParams()
    const specificCar = cars.find(car=>car.id===carId)
    return (
        <div>
        <p>{specificCar.make}</p>        
        </div>
    )

}

export default CarDetails
