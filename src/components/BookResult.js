import React from 'react';


function BookResult(props){


  async function saveBook(ev){
    ev.preventDefault();
    console.log("saveBook >>", props.book)
    
    const options = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(props.book)
    };
    const result = await fetch('/savebook', options)
    .then(response => response.json())
    if(result.status === "saved"){
      console.log("books was saved")
    } 
  }

  return (
    
    <li className="list-group-item">
          <div className="card">
            <div className="row">
              <div className="card-imgage col-md-2">
              <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt="book-image" />
            </div>

            <div className="card-content col-md-10">
              <div className="card-header">
                <a href={props.book.volumeInfo.infoLink} target="_blank" className="btn btn-outline-primary">View</a>
                <a onClick={saveBook} href="#" className="btn btn-primary">Save</a>
              </div>

              <div className="card-body col-md-10">
                <h5 className="card-title">{props.book.volumeInfo.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.book.volumeInfo.authors[0]}</h6>
                <p>{props.book.volumeInfo.description}</p>
                <h6><a href={props.book.volumeInfo.infoLink} target="_blank">Preview</a></h6>
              </div>
            </div>
            </div>
          </div>
        </li>
    
  )
}

export default BookResult;