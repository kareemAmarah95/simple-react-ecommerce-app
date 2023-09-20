import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Body from "../components/Body";
import CarouselComponent from "../components/CarouselComponent";
function Home() {
  return (
    <div className="home">
      {/* Header */}
      <Header />

      {/* Carousel Banner*/}
      <CarouselComponent />
      {/* Body */}
      <Body />
    </div>
  );
}

export default Home;
