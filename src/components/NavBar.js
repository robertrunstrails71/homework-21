import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';


function NavBar(){
  const [isShown, setShown ] = useState(false);


  const location = useLocation();
  const showClass = !isShown 
    ? `collapse navbar-collapse`
    : `collapse navbar-collapse show`;

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand"><img alt=""></img>
        BOOKS
      </Link>
      <button onClick={ ()=> setShown(!isShown)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={showClass} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">  
            <Link to="/searchbooks" className={location.pathname === "/searchbooks" ? "nav-link active" : "nav-link"}>
            Search
            </Link>
          </li>
          <li className="nav-item">  
            <Link to="/savedbooks" className={location.pathname === "/savedbooks" ? "nav-link active" : "nav-link"}>
            Saved Books
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  
  )
}

export default NavBar;