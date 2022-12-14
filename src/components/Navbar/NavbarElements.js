import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  background-color: #ae8d6f;
  flex-direction: column;
  height: ${({ open }) => (open ? '40vh' : '80px')};
  transition: ${({ theme }) => theme.animations.transition};

  /* @media (min-width: 700px) {
    height: 80px;
  } */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  height: auto;
`;

export const OpenLinkButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 3rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

// export const OpenLinkButton = styled.button`
//   width: 70px;
//   height: 50px;
//   background: none;
//   border: none;
//   font-size: 3rem;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;
