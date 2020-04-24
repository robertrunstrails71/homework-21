import React from 'react';
import BookResult from './BookResult';

function SearchResults(props){

  const searchDisplay = props.resultsData;
  
  return (
    <div className="container">
      <div className="results-wrapper">
        <ul className="list-group">
          {searchDisplay.map( result => 
            <BookResult book={result}/>
          )}
        </ul>  
      </div> 
    </div>
  )
}

export default SearchResults;