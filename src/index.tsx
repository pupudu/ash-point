import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        contained: {
          marginRight: '2px',
        },
      },
    },
  },
});

const rootElement = document.getElementById('root');

function Main({ ...rest }) {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TransitionGroup {...rest}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
          <Routes location={location}>
            <Route path="/:id" element={<App />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  );
}

(() => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    rootElement
  );
})();
