import React, { useState } from 'react';

function SearchForm(props){
  const [ searchInput, setSearchInput ] = useState();

  function handleSearchInput(event){
    const input = event.target.value;
    console.log('[Searching...]', input);
    setSearchInput( input );
  };

  function handleSubmit(event){
    event.preventDefault();
    console.log('[FORM SUBMITED]', searchInput);
    //props.dataCallBack(searchInput);
    props.callApi(searchInput);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookSearchForm">Search Books</label>
          <input onChange={handleSearchInput} value={searchInput} type="text" className="form-control" name="bookSearchForm" id="bookSearchForm" aria-describedby="bookSearch" placeholder="search tile, author..."/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default SearchForm;