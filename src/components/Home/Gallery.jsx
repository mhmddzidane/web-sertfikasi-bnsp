import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="text-center mt-4" id="gallery">
        <img
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png"
          style={{ width: 140 }}
          alt="icon"
        />
        <h1 className="-mt-4">GALLERY</h1>
        <p>Potret Biker Dari Beberapa Event Kami</p>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://carpyscaferacers.com/wp-content/uploads/2015/07/59-club-ride-HB.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src="https://c8.alamy.com/comp/T83JCH/france-var-presquile-de-saint-tropez-cogolin-harley-parade-for-eurofestival-europes-biggest-harley-davidson-gathering-T83JCH.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://c8.alamy.com/comp/BE4HX5/harley-davidson-event-biker-in-a-skeletal-suit-ruedesheim-hesse-germany-BE4HX5.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src="https://media.istockphoto.com/id/836315834/photo/group-of-bikers-riding-american-motorbikes.jpg?s=1024x1024&w=is&k=20&c=Gk83jHGPq4ColFHi1gw3kXHnCPI7ECTkNeP8te0ZC6Y="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://st4.depositphotos.com/1351501/20760/i/1600/depositphotos_207603512-stock-photo-bikers-riding-motorbike-harley-davidson.jpg"
                className="w-100  shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src="https://media.istockphoto.com/id/539215319/photo/custom-cafe-racer.jpg?b=1&s=170667a&w=0&k=20&c=xbv6t0AbJnrHgs1MAX1sa8aSvDTVRZLQ-ia0s98vZnQ="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
