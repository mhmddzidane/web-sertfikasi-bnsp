import React from "react";

import Header from "../components/Header";
import AboutUs from "../components/Home/AboutUs";
import Contact from "../components/Home/Contact";
import Events from "../components/Home/Events";
import Gallery from "../components/Home/Gallery";

const Home = () => {
  return (
    <div>
      <Header
        imageUrl={"https://wallpaperaccess.com/full/6847175.jpg"}
        title={"WE ARE THE RETRO ROCKET RIDERS"}
        subTitle={"CAFERACER BIKERS OWNER NATION"}
        desc={
          "Selamat datang di klub biker kami, kami adalah komunitas biker yang bersemangat dan berdedikasi yang berbagi kecintaan akan sensasi berkendara dan keindahan dunia di sekitar kita. Apakah Anda seorang veteran berpengalaman atau pendatang baru dalam gaya hidup biker, kami menyambut Anda untuk bergabung dengan kami dalam petualangan kami dan menjelajahi cakrawala baru. Jadi, nyalakan mesin Anda, lakukan perjalanan, dan ayo berkendara!"
        }
      />
      <Events />
      <AboutUs />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
