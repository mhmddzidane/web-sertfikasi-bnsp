import React from "react";
import OwlCarousel from "react-owl-carousel";
import Header from "../components/Header";

const Clients = () => {
  const options = {
    margin: 7,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div>
      <Header
        imageUrl={
          "https://www.webbikeworld.com/wp-content/uploads/2022/03/999-8.jpeg"
        }
        title={"OUR CLIENT"}
        subTitle={
          "Discover our services and take your business to the next level"
        }
      />

      <OwlCarousel className="owl-theme container mt-4" {...options}>
        <div className="item">
          <div className=" w-100 p-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2552px-Honda_Logo.svg.png"
              className="card-img-top"
              style={{ height: 200 }}
              alt="image"
            />
          </div>
        </div>
        <div className="item">
          <div className="p-3  w-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png"
              className="card-img-top"
              style={{ height: 200 }}
              alt="image"
            />
          </div>
        </div>
        <div className="item">
          <div className=" p-3 w-100">
            <img
              src="https://i.pinimg.com/originals/27/6a/97/276a970cd35a83cc71beee75cb89f382.png"
              style={{ height: 200 }}
              className="card-img-top"
              alt="image"
            />
          </div>
        </div>
        <div className="item">
          <div className=" p-3 w-100">
            <img
              src="https://cf.shopee.co.id/file/47b26870c7edf58796e5c2755e33d3de"
              style={{ height: 200 }}
              className="card-img-top"
              alt="image"
            />
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Clients;
