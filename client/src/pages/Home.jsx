import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Thread from "../components/Thread";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <Thread />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
