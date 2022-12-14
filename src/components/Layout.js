import { Outlet } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Footer from './Footer';
// import NavbarContainer from './NavbarContainer';
import Navbar from './Navbar';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
// import Burger from './NavbarContainer/Burger';
// import SideMenu from './NavbarContainer/SideMenu';
import styled from 'styled-components';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      {/* <Navbar ref={node}>
        <NavbarContainer />
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </Navbar> */}
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

// export const Navbar = styled.nav`
//   height: 6rem;
// `;

export default Layout;
