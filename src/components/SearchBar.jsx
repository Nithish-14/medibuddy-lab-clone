import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="search-container">
        <input className="search-input" type="search" placeholder='Find lab tests, diagnostics centres' />
        <FiSearch color="gray" size={25} className="search-icon"  />
    </div>
  )
}

export default SearchBar