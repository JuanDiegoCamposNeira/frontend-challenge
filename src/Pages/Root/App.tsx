import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Imported pages
import Login from '../Login/Login'; 
import NotFound from '../NotFound/NotFound';

function App() {

  // Validate the cookie here to define the right page to render :) 

  return (
    <>
      <Routes>

        <Route path='/login' element={ <Login /> } />



        <Route path='*' element={ <NotFound /> } />      

      </Routes>
    </>
  );

}

export default App;