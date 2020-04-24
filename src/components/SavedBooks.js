import React, { useState, useEffect } from 'react';

function SavedBooks(){
  const [ booksDisplay, setBooksDisplay ] = useState([])

  async function getDbBooks(){
    
    const result = await fetch('/savedbooks').then((response) => response.json());
    console.log('[dbBooks]', result )

    setBooksDisplay([...result])
    console.log("booksDisplay (fn)", booksDisplay)
  }

  useEffect( () => {
    console.log("calling getDbBooks...")
    getDbBooks();
  },[]);
  

  return (
    <>
    <h1>Saved Books</h1>
    <ul>
      {booksDisplay.map( (book) => 
        (<li>{book.title}</li>))}
    </ul>
    </>
  )
}

export default SavedBooks;