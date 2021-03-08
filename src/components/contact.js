/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from '../img/benjamin-color.jpg'
class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80)',
        }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/f/xeqpbazr"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                        </p>
                        <div className="contact-right">
                          <div className="profile-picture">
                            {/*<img src={image} alt="profile"></img>*/}
                          </div>
                          {
                            <ul className="list-ico">
                              <li>
                                <span className="ion-ios-location"></span>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://www.google.com/maps/place/Uutiskatu+3,+00240+Helsinki/@60.2036909,24.9201223,19.55z/data=!4m5!3m4!1s0x469209ed15a1bbd7:0x56ba182486f5d7a!8m2!3d60.203713!4d24.920196"
                                >
                                  00240 Helsinki
                                </a>
                              </li>
                              <li>
                                <span className="ion-ios-telephone"></span>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="tel:+358409656771"
                                >
                                  +358 40 9656771
                                </a>
                              </li>
                              <li>
                                <span className="ion-email"></span>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="mailto:beni.schelling@gmail.com"
                                >
                                  beni.schelling@gmail.com
                                </a>
                              </li>
                            </ul>
                          }
                        </div>
                      </div>

                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/benjambo"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://linkedin.com/in/benschelling"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://instagram.com/benjaminjoshin"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
  }
}

export default Contact
