import React from 'react'
import { useDispatch } from "react-redux";
import { searchByMakeModelYear } from '../../redux/actions/searchActions';

const SearchBar = ()=> {

    const dispatch = useDispatch()

    const searchForCar = () =>{
        console.log("Searching...");
        dispatch(searchByMakeModelYear)

    }
    let dummy

    return (
        <div>
            <div className="topnav">                
                <input type="text" onChange={dummy} placeholder="Search by make, model or year.." ></input>
                <button onClick={searchForCar}>Search</button>
            </div>    
        </div>
    )
}

export default SearchBar
