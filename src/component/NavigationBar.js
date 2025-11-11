import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '../hooks/useDebounce';
import logo from '../assests/logo.png'


const { Search } = Input;

const NavigationBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query);

  //caling parents onsearch when debounced value changes
  useEffect(() => {
    console.log(debouncedValue);
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);


  return (
    <div className="nav-container flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="w-20 h-34 rounded-md overflow-hidden">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
      <div className="search-container flex-1 mx-4">
        <Search
          placeholder='Search Movies...'
          allowClear
          size="middle"
          minLength="3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="wishlist-container flex items-center gap-2 cursor-pointer">
        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
        <h3>Wishlist</h3>
      </div>
    </div>
  );
}

export default NavigationBar;