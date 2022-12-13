import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/home';
import Menu from './pages/menu/meny';
import About from './pages/about/om-palermo';
import Contact from './pages/contact/kontakt';
import Error from './pages/error/404';

import { GlobalStyles } from './styles/global';
import Theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='meny' element={<Menu />} />
            <Route path='om-palermo' element={<About />} />
            <Route path='kontakt' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
