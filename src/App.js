import React from 'react';
/*import { Header, Content, Footer } from './func-components';
import {Calendar} from './class-components';*/
import './App.css';
/*import logo from './logo.svg';*/
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
        </>
  ) 
}

export default App;
