import React from 'react'
import { useState } from 'react';

import { Link } from "react-router-dom"

import Hamburger from 'hamburger-react'

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Zoom from '@mui/material/Zoom';

function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => {setOpen(false)}}>
      <div>
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} color={"#4F3422"}/>
        <Zoom in={isOpen}>
          <div id="dropdown-menu">
            <ul>
              <Link to={'/'}  style={{textDecoration: 'none', }}><li>ACCUEIL</li></Link>
              <Link to={'/english'}  style={{textDecoration: 'none', }}><li>ENGLISH</li></Link>
              <li><a href="/contact" >CONTACT</a></li>
            </ul>
          </div>
        </Zoom>
      </div>
    </ClickAwayListener>
  )
}

export default Menu