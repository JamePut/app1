import React from 'react'
import './style.css'

export function Header() {
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        textDecoration: 'none'
    }
    return (
    <div style={{backgroundColor: '#ccc'}}>
        <a href=" " style={aStyle}>Home</a> |&nbsp;
        <a href=" " style={aStyle}>React</a> |&nbsp;
        <a href=" " style={aStyle}>React Native</a>
    </div>
    )
}

export function Content() {
    return (
    <center>
        <div className='box'>
          <span className='borderLine'>
            <form>
              <h1> Welcome to my page </h1>
            </form>
          </span>
        </div>
        <br/><br/><br/>
    </center>
    )
}
export const Footer = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <br/>&copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}
    