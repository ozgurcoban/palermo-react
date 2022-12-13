import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHero = styled.header`
  @media (min-width: ${({ theme }) => theme.sizes.tablet}) {
    margin: 3rem 0;
  }
  position: relative;
  z-index: -1;
`;

export const HeroContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  filter: blur(2px) brightness(68%);
  -webkit-filter: blur(2px) brightness(68%);
  -moz-filter: blur(2px) brightness(68%);
  z-index: -1;
  position: relative;
`;

export const HeroText = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.primaryLight};
  position: absolute;
  font-size: 2rem;
`;
