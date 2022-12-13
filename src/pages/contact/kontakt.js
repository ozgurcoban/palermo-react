import React from 'react';

import styled from 'styled-components';

const Contact = () => {
  return (
    <Page>
      <h2>Contact Page</h2>
    </Page>
  );
};

const Page = styled.main`
  min-height: ${({ theme }) => theme.page.minHeight};
`;

export default Contact;
