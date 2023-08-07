import React, { Component } from 'react'
import { Navbar,NavbarBrand } from 'reactstrap'
import {styled} from 'styled-components';

const Nav=styled.div`

`

export const Header = () => {
    return (
       <>
    <Nav
    
    color="rgba(0, 0, 0, 0.1)"
    >
  
     
      <h1 style={{color:'orange',}}><p style={{textShadow:'2px 2px 3px black',fontSize:'48px',marginTop:'0px'}}>Let's Check the Weather</p></h1>
  </Nav>
  </>
    )
}
