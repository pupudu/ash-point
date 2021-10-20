import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route
        render={({ location }) => (
          <TransitionGroup {...rest}>
            <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
              <Switch location={location}>
                <Route path="/:id" render={() => <App />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </ThemeProvider>
  );
}

(() => {
  console.log('dodan');
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    rootElement
  );
})();
