import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Leader from "./components/Leader";
import Players from "./components/Players";
import Fixtures from "./components/Fixtures";
import Results from "./components/Results";
import Standings from "./components/Standings";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Leader />
        <Players />
        <Fixtures />
        <Results />
        <Standings />
      </main>

      <Footer />
    </>
  );
}

export default App;