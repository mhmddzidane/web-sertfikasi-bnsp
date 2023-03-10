import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { dataArtikel } from "../data/data";

const Article = () => {
  return (
    <div>
      <Header
        imageUrl={
          "https://i.prcdn.co/img?regionKey=Dk0rwXcJo%2FO8gdXOwu7rKQ%3D%3D"
        }
        title={"ARTICLE"}
        subTitle={"Find Latest News About Your Ride"}
        desc={
          "Stay up-to-date on the latest biker news and events, all in one convenient place."
        }
      />

      <div className="container mt-5">
        <h1 className="fw-bold">FEATURED ARTICLE</h1>
        <hr className="bg-dark border-2 border-top border-dark mb-5" />
        <div className="row">
          <div className="col-lg-6">
            <Link
              to={`/article/1`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://pbs.twimg.com/media/DJmALwqW0AA6ART?format=jpg&name=large"
                alt="article"
                style={{ width: "100%", height: 300 }}
              />
              <p className="mt-2 text-secondary">10 Maret 2023</p>
              <h2 className="fs-3 fw-bold">
                Sejarah Cafe Racer, Jenis Motor Custom Asal Inggris
              </h2>
              <p className="text-secondary text-truncate">
                Asal-usul Cafe Racer erat kaitannya dengan skena musik rock yang
                berkembang di Inggris antara 1950 hingga 1960-an Seperi namanya,
                jenis motor ini berasal dari sebuah cafe atau kedai minum di
                Inggris.
              </p>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to={`/article/3`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://imgx.gridoto.com/crop/0x26:871x629/700x500/photo/gridoto/2018/09/06/4013753090.jpg"
                    alt="article"
                    style={{ width: "100%", height: 120 }}
                  />
                </div>
                <div className="col-lg-6">
                  <p className="mt-2 text-secondary">12 Maret 2023</p>
                  <h2 className="fs-5 fw-bold">
                    Apa Itu Jenis Motor Cafe Racer? Dan Apa Ciri Khasnya?
                  </h2>
                </div>
              </div>
            </Link>
            <hr className="bg-dark border-2 border-top border-dark" />
            <Link
              to={`/article/2`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://alkirahmatullah.files.wordpress.com/2015/02/cafe-racer-mantap.jpg"
                    alt="article"
                    style={{ width: "100%", height: 120 }}
                  />
                </div>
                <div className="col-lg-6">
                  <p className="mt-2 text-secondary">2 Februari 2023</p>
                  <h2 className="fs-5 fw-bold">
                    7 Hal Penting dalam Modifikasi Custom Motor Cafe Racer,
                    Nomor 5 Krusial
                  </h2>
                </div>
              </div>
            </Link>
            <hr className="bg-dark border-2 border-top border-dark" />
            <Link
              to={`/article/4`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://c.inilah.com/2021/12/211112_094902_86b6_inilah.com_.jpeg"
                    alt="article"
                    style={{ width: "100%", height: 120 }}
                  />
                </div>
                <div className="col-lg-6">
                  <p className="mt-2 text-secondary">20 Februari 2023</p>
                  <h2 className="fs-5 fw-bold">
                    Chopper Jokowi dan Cafe Racer Gibran Akan Dipajang di IIMS
                    2023
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <hr className="bg-dark border-2 border-top border-dark mb-3" />
        <h1 className="fw-bold mb-4">NEW ARTICLE</h1>
        <div className="row">
          {dataArtikel.map((artikel, index) => (
            <div className="col-lg-4 " key={index}>
              <Link
                to={`/article/${artikel.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={artikel.gambar}
                  alt="article"
                  style={{ width: "100%", height: 140 }}
                />
                <p className="mt-2 text-secondary">{artikel.date}</p>
                <h2 className="fs-5 fw-bold"> {artikel.title}</h2>
                <p className="text-secondary text-truncate">{artikel.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
