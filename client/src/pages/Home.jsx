import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className='flex-col flex items-center justify-center min-h-screenc bg-[url("/bg_img.png")] bg-cover bg-center '>
      <NavBar />
      <Header />
    </div>
  );
};

export default Home;
