import React from 'react';

import styled from 'styled-components';

const About = () => {
  return (
    <Page>
      <h2>About Page</h2>
    </Page>
  );
};

const Page = styled.main`
  min-height: ${({ theme }) => theme.page.minHeight};
`;

export default About;
