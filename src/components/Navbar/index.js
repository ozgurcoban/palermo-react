import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.png';
import Burger from './Burger';

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Logo,
  NavbarExtendedContainer,
  OpenLinkButton,
} from './NavbarElements';

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer id='navbar' open={open}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'>start</NavbarLink>
            <NavbarLink to='/meny'>meny</NavbarLink>
            {/* <NavbarLink to='/om-palermo'>om oss</NavbarLink>
            <NavbarLink to='/kontakt'>kontakta oss</NavbarLink> */}

            <Burger open={open} setOpen={setOpen} />
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={logoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {open && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={() => setOpen(!open)} to='/'>
            start
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => setOpen(!open)} to='/meny'>
            meny
          </NavbarLinkExtended>
          {/* <NavbarLinkExtended to='/om-palermo'>om oss</NavbarLinkExtended>
          <NavbarLinkExtended to='/kontakt'>kontakta oss</NavbarLinkExtended> */}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
