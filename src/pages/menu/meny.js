import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  return (
    <Page>
      <h2>Menu page</h2>
    </Page>
  );
};

const Page = styled.main`
  min-height: ${({ theme }) => theme.page.minHeight};
`;

export default Menu;
