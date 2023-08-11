import React from 'react';
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import './style.css';
function App() {
  return(
        <>
        <Header/>
        <p><br/><center><Calendar/></center><br/></p>
        <Content/>
        <Footer/>
        </>
  ) 
}

export default App;
