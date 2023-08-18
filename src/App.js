import React from 'react';
import { Header, Content, Footer } from './func-components';
import {Calendar} from './class-components';
import './App.css';
import logo from './logo.svg';
import './style.css';
import Banner from './banner'
import {Button} from './class-components';
import {Calculator} from './calculator';
import {Calculator2} from './calculator';
import {EventData2} from './event-data';
import {Table} from './event-data';




function App() {
  return(
        <>
        <Header/>
        <h1><br/><center><Calendar/></center><br/></h1>
        <Content/>
        <center>
        <img src={logo} className="App-logo" alt="logo"/>
        </center>
        <Banner/>
        <center>
          <Button/>
          <br/>
          <Calculator/>
          <br/>
          <Calculator2/>
          <br/>
          <EventData2/>
          <Table/>
          <br/>
        </center>
        <Footer/>
        </>
  ) 
}

export default App;
