import React from 'react';
/*import { Header, Content, Footer } from './func-components';
import {Calendar} from './class-components';*/
import './App.css';
/*import logo from './logo.svg';*/
import './style.css';
/*import Banner from './banner'
import {Button} from './class-components';
import {Calculator} from './calculator';
import {Calculator2} from './calculator';
import {EventData2} from './event-data';
import {Table} from './event-data';
import RefsFunc from './refs-func';
import RefsArray from './refs-array';
import MessageBox from './state-func';*/
import { userContext } from './context';
import Header from './context-header';
import Content from './context-content';
import Header2 from './context-header2';
import Content2 from './context-content2';

function App() {
  let[user,setUser]= React.useState('');
  return(
        <>
        <userContext.Provider value={[user,setUser]}>
            <Header2/>
            <Content2/>
        </userContext.Provider>

        </>
  ) 
}

export default App;
