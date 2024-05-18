import React from "react";
import "../style/home.css";
import NavBar from "../components/NavBar";
import PopularWomen from "../components/PopularWomen";
import NewCollection from "../components/NewCollection";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import GetInfoBanner from "../components/GetInfoBanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-wrapper">
      <NavBar />
      <Banner />
      <PopularWomen />
      <BannerBottom />
      <NewCollection />
      <GetInfoBanner />
      <Footer />
    </div>
  );
};

export default Home;