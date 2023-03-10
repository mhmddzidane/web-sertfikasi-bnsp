import React from "react";

const AboutUs = () => {
  let aboutUrl =
    "http://naikmotor.com/wp-content/uploads/2015/01/Naked-13-Caferacer-Club-Malaysia_9.jpg";
  return (
    <div>
      {/* aboutus */}
      <div
        className="bg-image "
        style={{
          backgroundImage: `url(${aboutUrl})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", paddingTop: 70 }}
          className="w-100 h-100 text-light px-5 "
        >
          <div className="row">
            <div
              className="col-lg-6 align-items-center text-center fw-bold"
              style={{ fontSize: 18 }}
            >
              <img
                width="250px"
                className="bg-light rounded-circle"
                src="https://seeklogo.com/images/S/supermoto-owner-group-chapter-galesong-logo-64375ADED8-seeklogo.com.png"
                alt="logo"
              />
              <div className="d-flex mt-3">
                <p className="mx-auto">
                  200 <br /> MEMBERS
                </p>
                <p className="mx-auto">
                  420 <br /> EVENTS
                </p>
                <p className="mx-auto">
                  20 <br /> TOUR
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h1>ABOUT US</h1>
              <p>
                Didirikan pada tahun 2010, The Retro Rocket Riders adalah
                komunitas pengendara yang erat yang berbagi hasrat untuk sepeda
                motor klasik dan kebebasan di jalan terbuka. Klub kami dibangun
                di atas dasar persaudaraan dan persahabatan, dan kami menyambut
                pengendara dari semua latar belakang dan tingkat keahlian.
                <br />
                <br />
                Klub kami didedikasikan untuk mempromosikan berkendara yang aman
                dan respect kepada sesama pengedara, serta melestarikan sejarah
                dan budaya yang kaya komunitas cafe racer dan motor antik. Kami
                mengatur perjalanan reguler, pertemuan, dan acara, serta
                berpartisipasi di dalamnya acara amal dan penggalangan dana
                untuk memberikan kembali kepada komunitas kami.
                <br />
                <br />
                Sebagai anggota The Retro Rocket Riders, Anda akan mendapatkan
                akses ke jaringan sesama pengendara yang berbagi semangat dan
                dedikasi Anda dengan gaya hidup biker. Kami menghargai
                keragaman, rasa hormat, dan komitmen untuk perjalanan, dan kami
                menyambut siapa pun yang berbagi ini nilai-nilai untuk bergabung
                dengan barisan kami.
                <br />
                <br />
                Come ride with us and experience the thrill of the open road
                like never before.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* visimsi */}
      <div
        className="bg-image "
        style={{
          backgroundImage: `url(${aboutUrl})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", paddingTop: 70 }}
          className="w-100 h-100 text-light px-5 pb-5"
        >
          <div className="row">
            <div className="col-lg-6">
              <h1>VISION</h1>
              <p>
                Menjadi klub motor retro yang terkemuka dalam mendorong semangat
                kebebasan, persaudaraan, dan budaya berkendara di jalan raya.
              </p>
            </div>
            <div className="col-lg-6">
              <h1>MISSION</h1>
              <ol>
                <li>
                  Mempromosikan semangat kebebasan dan gaya hidup berkendara
                  yang aman, bertanggung jawab, dan menghargai keberagaman.
                </li>
                <li>
                  Membangun komunitas yang kuat, saling mendukung, dan mendorong
                  pertumbuhan individu dan kolektif.
                </li>
                <li>
                  Memfasilitasi acara berkendara, pertemuan, dan kegiatan sosial
                  yang memperkuat hubungan antar anggota dan mendukung komunitas
                  yang lebih luas.
                </li>
                <li>
                  Menyediakan pendidikan dan pelatihan berkendara untuk
                  mempromosikan keselamatan dan keterampilan berkendara yang
                  lebih baik.
                </li>
                <li>
                  Berkontribusi pada kegiatan amal dan masyarakat sebagai bagian
                  dari tanggung jawab sosial klub.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
