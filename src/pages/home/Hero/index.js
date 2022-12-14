import React from 'react';
import {
  StyledHero,
  Image,
  HeroText,
  HeroContainer,
  Headline,
  Tagline,
} from './HeroElements';
import heroImage from '../../../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <Image src={heroImage} />
        <HeroText>
          <Headline>Palermo</Headline>
          <Tagline>en plats att umgås</Tagline>
        </HeroText>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
