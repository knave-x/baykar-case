import React from "react";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7/>
      <h1 className="text-7xl text-center text-red-500">test</h1>
    </div>
  );
};

export default App;
