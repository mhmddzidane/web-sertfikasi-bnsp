import React from "react";

const Contact = () => {
  let contactUrl =
    "https://www.returnofthecaferacers.com/wp-content/uploads/2021/07/suicide-club-cafe-racers-motorcycles-5.jpg";

  return (
    <div>
      <div
        className="bg-image pt-4"
        id="contact"
        style={{ backgroundImage: `url(${contactUrl})` }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", paddingtop: 70 }}
          className="w-100 h-100 text-light px-5 pb-1"
        >
          <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>

            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className="row mb-5">
              <div className=" mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                        <label className="">Your name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                        <label className="">Your email</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                        />
                        <label className="">Subject</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                        ></textarea>
                        <label>Your message</label>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="text-center text-md-left">
                  <a className="btn btn-dark fw-bold fs-5">Send</a>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center fs-4">
            <div className="row">
              <div className="col-lg-6 pb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
                  className="h-100 w-100"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                    <p>
                      <small>New York, NY 10012, USA</small>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-phone fa-2x text-primary"></i>
                    <p>
                      <small>+ 01 234 567 89</small>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                    <p>
                      <small>contact@gmail.com</small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
