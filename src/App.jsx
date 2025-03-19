import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import { BackToTopButton } from "./components/BackToTopButton";
import Footer from "./components/Footer";
import styled from "styled-components";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" />
              <Route path="/products" />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </MainContent>
          <BackToTopButton />
          <Footer />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


const theme = {
  colors: {
    primary: "#00968c",
    secondary: "#4d6561",
    tertiary: "#d3af97",
    text: "#ffffff",
  },
};

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const MainContent = styled.main`
`;

//referens page  https://www.compleocharging.se/en/contact-info
