import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './style.js'

function Navbar () {
  return (

       <NavbarSection >
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList >
                    <ListItem><NavLink  to="/">Home</NavLink></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><NavLink to="/contact">Contact</NavLink></ListItem>
               </UlList>
            </div>
        </NavbarSection>
  );
}

export default Navbar;
