import "./App.css";
import { BrowserRouter, Routes, Route, PrefetchPageLinks } from "react-router";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import { BackToTopButton } from "./components/BackToTopButton";

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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </ThemeProvider>
  );
}

export default App;

//referens
// https://www.compleocharging.se/en/contact-info
