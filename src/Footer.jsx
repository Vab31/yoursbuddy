import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div><footer>
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="contact-left">
              <h3>Media Agency</h3>
              <p>
                We will Provide the cheepest and best work than other organisations.
              </p>
              <div id="contact-info">
                <address>
                  <strong>Headquarters:</strong>
                  <br />
                  <p>
                    172 Dakoha, Jalandhar Cant
                    <br />, Baba enclave city, 144023
                  </p>
                </address>
                <div id="phone-email">
                  <p>
                    <strong>Phone:</strong>
                    <span> +91 9053170142 </span> <br />
                    <strong>Email:</strong>
                    <span> yoursbuddy60@gmail.com</span> <br />
                  </p>
                </div>
              </div>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-icon icon-white">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon icon-white">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon icon-white">
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon icon-white"></a>
                </li>
              </ul>
              <a href="#" className="social-icon icon-white"></a>
            </div>
            <a href="#" className="social-icon icon-white"></a>
          </div>
          <a href="#" className="social-icon icon-white"></a>
          <div className="col-md-6">
            <a href="#" className="social-icon icon-white"></a>
            <div id="contact-right">
              <a href="#" className="social-icon icon-white">
                <h3>Contact Us</h3>
              </a>
              <form action="#">
                <a href="#" className="social-icon icon-white">
                  <input
                    type="text"
                    name="full-name"
                    placeholder="Full Name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Message..."
                    className="form-control"
                    defaultValue={""}
                  />
                </a>
                <div id="send-btn">
                  <a href="#" className="social-icon icon-white"></a>
                  <a className="btn-send btn-lg" href="#">
                    SEND
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="footer-copyrights">
              <p>Copyrights © 2020 All Rights Reserved by Web Agency.</p>
            </div>
          </div>
          <div className="col-md-6 hidden-sm hidden-xs">
            <div id="footer-menu">
              <ul>
                <li>
                  <a className="smooth-scroll" href="#">
                    Home
                  </a>
                  /
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    About
                  </a>
                  /
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    Services
                  </a>
                  /
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    Team
                  </a>
                  /
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    Pricing
                  </a>
                  /
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer