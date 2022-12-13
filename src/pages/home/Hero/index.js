import React from 'react';
import {
  StyledHero,
  Image,
  HeroText,
  HeroContainer,
  Background,
} from './HeroElements';
import heroImage from '../../../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <Image src={heroImage} />
        <HeroText>
          <h1>Palermo</h1>
          <h4>när du vill umgås</h4>
        </HeroText>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
