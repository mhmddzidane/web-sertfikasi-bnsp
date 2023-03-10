import React from "react";
import Header from "../components/Header";
import { dataEvents } from "../data/data";

const Events = () => {
  return (
    <div>
      <Header
        imageUrl={
          "https://www.naikmotor.com/wp-content/uploads/2019/10/Sunmori-Manasi-Ride-Custom-Collaboration-53.jpg"
        }
        title={"EVENTS"}
        subTitle={"Our Upcoming Events"}
        desc={
          "Attention all vintage bike enthusiasts - our upcoming antique motorcycle show is the perfect opportunity to admire and showcase classic rides."
        }
      />

      <div className="container mt-5 mb-5">
        <h2>UPCOMING EVENTS</h2>

        <div className="row d-none d-lg-flex">
          {dataEvents.map((event, index) => (
            <div className="col-12 mt-3" key={index}>
              <div className="card">
                <div style={{ display: "flex", flex: "1 1 auto" }}>
                  <div className="img-square-wrapper">
                    <img
                      className=""
                      style={{ width: 300, height: 180 }}
                      src={event.imageUrl}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{event.title}</h4>
                    <p className="card-text">{event.desc}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{event.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row d-lg-none d-sm-flex">
          {dataEvents.map((event, index) => (
            <div className="col-12 mt-3" key={index}>
              <div className="card">
                <div>
                  <div className="img-square-wrapper">
                    <img
                      className="w-100"
                      style={{ height: 180 }}
                      src={event.imageUrl}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{event.title}</h4>
                    <p className="card-text">{event.desc}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{event.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
