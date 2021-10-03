import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
//initalize usestate for searchbar
    const [filteredData, setFilteredData] = useState([]);
    const [wordInput, setWordInput] = useState("");
//create event handler to take user input 
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordInput(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    };
//clear input after done searching
    const clearInput = () => {
        setFilteredData([]);
        setWordInput("");
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div class="searchIcon">
                    {filteredData.length === 0 ? (<SearchIcon/>) :
                    (<CloseIcon id="clearBtn" onClick={clearInput} />)} </div>
            </div>
            {filteredData.length != 0 && (
            <div className="dataResults">
               {filteredData.slice(0, 5).map((value, key) =>{
                   return <a class="dataItem" href={value.link} target={value.link}>
                       <p>{value.name}</p></a>
            
               })}
            </div>
    )}
         </div>
    )
}

export default SearchBar;