import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          marginRight: '2px'
        }
      },
    }
  }
});

const rootElement = document.getElementById("root");

(async function run() {
  console.log('dodan');
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>,
    rootElement
  );
})();
