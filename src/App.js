import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { JobsTicker } from "./components/Ticker";
import { Stats } from "./components/Stats";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Loader } from "./components/common/Loader";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      handleLoaderComplete();
    }, 6000);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <CONTAINER className="App">
            <Home />
            <JobsTicker></JobsTicker>
            <About />
            <Projects />
            <Contact />
            <Stats />
          </CONTAINER>
        </>
      )}
    </>
  );
}

const CONTAINER = styled.div`
  width: min(70rem, 100%);
  margin-inline: auto;
`;

export default App;
