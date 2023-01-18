import React from "react";
import {
  Work,
  Testimonials,
  Skills,
  Header,
  About,
  Footer,
} from "./containers";
import { Navbar } from "./components";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
