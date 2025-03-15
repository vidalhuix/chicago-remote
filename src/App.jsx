import "./App.css";
import { BrowserRouter, Routes, Route, PrefetchPageLinks } from "react-router";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";

import { BackToTopButton } from "./components/BackToTopButton";
import HomePage from "./components/HomePage";

const root = document.getElementById("root");

const theme = {
  colors: {
    primary: "#00968c",
    secondary: "#00968c",
    text: "#ffffff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" />
          <Route path="/products" />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </ThemeProvider>
  );
}

export default App;
