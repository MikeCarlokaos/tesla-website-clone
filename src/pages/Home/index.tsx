import React from "react";
import Products from "../../components/layout/home/Products";
import Navbar from "../../components/layout/nav/Navbar";

const Home = () => {
  return (
    <div className="relative w-full h-full z-10">
      <header>
        <Navbar />
      </header>
      <main className="relative z-10">
        <Products />
      </main>
      <footer className="absolute bottom-0 left-0 right-0 z-0">
        <div className="w-full h-full bg-black text-white text-center">
          <h1>This is only a sample</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;
