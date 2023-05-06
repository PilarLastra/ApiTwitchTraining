import React, { useState } from 'react';

import "./SearchBar.scss"

export const SearchBar = (props:any) => {

  const [search, setSearch] = useState("");
  
  
  const searcher = (e:any) => {

    setSearch(e.target.value);
   

    props.handleSearch(search);
   

  }
  
  return(
    <div className="search__container">
      <p className="search__title">
       
      </p>
      <input  value={search} onChange={searcher} className="search__input" type="text" placeholder="Search" />
      </div>
   
  )

}