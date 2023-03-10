import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { dataEvents } from "../../data/data";

const Events = () => {
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
    <div className="text-center pb-4">
      <img
        src="https://static.thenounproject.com/png/378318-200.png"
        alt="icon"
      />
      <h1 id="events" className="-mt-4">
        UPCOMING EVENTS
      </h1>
      <p>Mari bergabung dengan event mendatang kami!</p>
      <OwlCarousel className="owl-theme container mt-4" {...options}>
        {dataEvents.map((event, index) => (
          <div className="item" key={index}>
            <div className="card w-100">
              <img
                src={event.imageUrl}
                className="card-img-top"
                style={{ height: 200 }}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-truncate">{event.desc}</p>
                <Link to="/events" className="btn btn-dark">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Events;
