import React, { useState } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults'

function SearchBooks(){
  //const [ searchData, setSearchData ] = useState("");
  const [ searchDisplay, setSearchDisplay ] = useState([]);

  async function getApiBooks( search ){
    const apiKey = "AIzaSyD35bosxZq4zuy5V4zc_R8bBkzJJ5Uz-oE";
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=${apiKey}`;
    //console.log('[API URL]', apiURL )
    const apiResult = await fetch( apiURL ).then( result => result.json());
    console.log('API CALL >>', apiResult );
    setSearchDisplay( [ ...apiResult.items ] );
  };

  return (
    <>
    <Header  />
    <SearchForm callApi={getApiBooks}/>
    <SearchResults resultsData={searchDisplay} />
    </>
  )
}

export default SearchBooks;