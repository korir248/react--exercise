import React, { useState} from 'react'
import { useDispatch } from "react-redux";
import { searchByMakeModelYear } from '../../redux/actions/searchActions';

const SearchBar = ()=> {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const searchForCar = (inputValue) =>{
        console.log("Searching...");
        dispatch(searchByMakeModelYear(inputValue))

    }

    return (
        <div>
            <div className="topnav">                
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder="Search by make, model or year.." ></input>
                <button onClick={()=>searchForCar(inputValue)}>Search</button>
            </div>    
        </div>
    )
}

export default SearchBar
