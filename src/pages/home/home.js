import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import { InfoSection } from './InfoSection';

const Home = () => {
  return (
    <Page>
      <Hero />
      <InfoSection />
    </Page>
  );
};

const Page = styled.main`
  width: 90vw;
  margin: 2rem auto;
  max-width: 1200px;
`;

export default Home;
