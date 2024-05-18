import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            // Navegar a la nueva ruta con el valor del input como parámetro
            navigate(`/fafa?filter=${inputValue}`);//????????????????????????????????????????????
        }
    };

  return (
    <div className='searchDiv'>
        <input value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterPress} className='searchBar' type='text' placeholder='buscar...'></input>
      </div>
  )
}

export default SearchBar