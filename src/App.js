import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SearchBooks from './components/SearchBooks';
import SavedBooks from './components/SavedBooks';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
  
        <Route exact path={["/","/searchbooks"]} component={SearchBooks} />
        <Route exact path="/savedbooks" component={SavedBooks} />
      


    </div>
  </Router>

  
  );
}

export default App;
