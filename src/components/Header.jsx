import React from "react";

const Header = ({ imageUrl, title, subTitle, desc }) => {
  return (
    <div
      className=" text-center bg-image "
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: 500,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", paddingTop: 190 }}
        className="w-100 h-100 text-light "
      >
        <h1 className="fw-bold">{title}</h1>
        <h3 className="fs-5">{subTitle}</h3>
        <p
          className=" mx-auto d-none d-lg-block"
          style={{ marginTop: 100, width: "70%" }}
        >
          {desc}
        </p>
        <p className=" mx-auto px-4 d-lg-none">{desc}</p>
      </div>
    </div>
  );
};

export default Header;
