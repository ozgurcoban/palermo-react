import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html, body {
  margin: 0;
  padding: 0;
}

body {
  background-color: #D7D5D7;
  font-family: 'Titillium Web', sans-serif;
}

*, *::after, *::before {
  box-sizing: border-box;
}

ul {
  padding: 0;
  list-style-type: none;
}

h1 {
  
}

h2 {
  font-size: 3rem;
  font-weight: 500;
}
h4 {
letter-spacing: 2px
}

a {
  text-decoration: none;
  letter-spacing: 1px;
} 

p {
  line-height: 1.5rem;
  font-weight: 300;
}

/* .page {
  width: 90vw;
  margin: 0 auto;
}

.page {
  min-height: calc(100vh - (6rem + 4rem));
} */
`;
