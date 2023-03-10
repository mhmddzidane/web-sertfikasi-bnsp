import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { dataStore } from "../data/data";

const Store = () => {
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
        items: 3,
      },
    },
  };

  return (
    <div>
      <Header
        imageUrl={
          "https://media.thebicestercollection.com/3z73vs69pqez/22seg79fbcROuTMYycz9zS/872c40669ba0db8c8328e297ac6b3964/MMV_Landscape_1920x1080_BALR_Vip-sale_Hero.jpg?w=1920&h=1080&fl=progressive&q=80&fm=jpg"
        }
        title={"STORE"}
        subTitle={"Go Get Our Merchandise"}
        desc={
          "Get your hands on the best biker gear and accessories on the market - all available on our store page"
        }
      />

      <div className="container mt-5">
        <h2>Jackets</h2>
        <OwlCarousel
          className="owl-theme container text-center py-4"
          {...options}
        >
          {dataStore.jaket.map((product, index) => (
            <div className="item" key={index}>
              <Link
                to={`/store`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="w-100 position-relative  text-center ">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    style={{ height: 300 }}
                    alt="image"
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      backdropFilter: "blur(3px)",
                    }}
                    className="position-absolute w-100 bottom-0 pt-2"
                  >
                    <p className="text-light fs-4">{product.title}</p>
                    <p className="text-light fs-5">Rp. {product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>

        <h2>T-shirts</h2>
        <OwlCarousel
          className="owl-theme container text-center py-4"
          {...options}
        >
          {dataStore.tshirt.map((product, index) => (
            <div className="item" key={index}>
              <Link
                to={`/store`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="w-100 position-relative  text-center ">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    style={{ height: 300 }}
                    alt="image"
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      backdropFilter: "blur(3px)",
                    }}
                    className="position-absolute w-100 bottom-0 pt-2"
                  >
                    <p className="text-light fs-4">{product.title}</p>
                    <p className="text-light fs-5">Rp. {product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Store;
