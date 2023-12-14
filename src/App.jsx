import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { lightBlue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
  },
});

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="NavBar">
        <NavBar />
      </div>
      <Container>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
