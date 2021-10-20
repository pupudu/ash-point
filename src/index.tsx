import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#333",
        color: "#eee"
      },
      h1: {
        fontSize: "2em",
        fontWeight: "bold"
      },
      blockquote: {
        margin: 0
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        marginRight: "2px"
      }
    }
  }
});

const rootElement = document.getElementById("root");

(async function run() {
  render(
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <App Screens={Screens} /> */}
        <Routes>
          <Route path="/:id" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>,
    rootElement
  );
})();
