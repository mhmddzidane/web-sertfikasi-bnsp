import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { dataArtikel } from "../data/data";

const ArticleDetail = () => {
  const params = useParams();
  let id = params.id;
  const artikels = dataArtikel.find((artikel) => artikel.id === parseInt(id));

  return (
    <div>
      <Header
        imageUrl={
          "https://www.gpb.org/sites/default/files/styles/three_two_702x468/public/npr_story_images/2020/07/14/western_herald.jpg?h=f242bc18&itok=lzbyowRM"
        }
        title={artikels.title}
        subTitle={artikels.subTitle}
      />

      <div
        className="text-justify"
        style={{ paddingInline: 60, marginTop: 50 }}
      >
        <p className="right-0 position-absolute d-none d-lg-flex">
          Posted : {artikels.date}
        </p>
        <p className="d-lg-none">Posted : {artikels.date}</p>
        <img
          src={artikels.gambar}
          alt="gambar"
          className="w-50 d-none d-lg-flex mx-auto "
        />
        <img src={artikels.gambar} alt="gambar" className="w-100 d-lg-none" />
        <p className="fs-4 mt-5" style={{ fontWeight: 400 }}>
          {artikels.desc}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetail;
