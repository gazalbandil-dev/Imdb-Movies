import React,{useState} from 'react';
import {Input} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const {Search} = Input;

const NavigationBar = ({onSearch}) => {
  const [query,setQuery] = useState("");
  

  return (
    <div className="nav-container flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="logo text-2xl font-bold">
        LOGO
      </div>
      <div className="search-container flex-1 mx-4">
        <Search
          placeholder='Search Movies...'
          allowClear
          enterButton="Search"
          size="middle"
          onChange={(e) => setQuery(e.target.value)}
          onSearch={onSearch(query)}
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