import React from 'react';
import { Header, Content, Footer } from './func-components';
import Calendar from './class-components';
import './App.css';
import logo from './logo.svg';
import './style.css';

function App() {
  return(
        <>
        <Header/>
        <h1><br/><center><Calendar/></center><br/></h1>
        <Content/>
        <center>
        <img src={logo} className="App-logo" alt="logo"/>
        </center>
        <Footer/>
        </>
  ) 
}

export default App;
