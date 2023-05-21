import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div><section id="team" className="py-5">
    <div className="container">
      {/*title*/}
      <div className="row title mb-5">
        <div className="col text-center">
          <h1 className="text-uppercase">Our Team</h1>
          <h3 className="text-capitalize">Members Social Media .</h3>
        </div>
      </div>
      {/* end of title*/}
      <div className="row">
        <article className="team-member col-sm-6 col-lg-4 my-3">
          <div className="member-container">
            <img src="images/team1.jpg" className="img-fluid team-image" alt="" />
            <div className="member-info d-flex justify-content-around ">
              <div className="member-text">
                <h3 className="text-capitalize">Founder</h3>
                <p className="text-capitalize text-light">
                Lokesh Rajput
                </p>
                <div className="team-icons">
                  <a href="#" className="mr-2">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="team-member col-sm-6 col-lg-4 my-3">
          <div className="member-container">
            <img src="images/team2.jpg" className="img-fluid team-image" alt="" />
            <div className="member-info d-flex justify-content-around ">
              <div className="member-text">
                <h3 className="text-capitalize"> Co Founder</h3>
                <p className="text-capitalize text-light">
                Kshitiz sharma
                </p>
                <div className="team-icons">
                  <a href="#" className="mr-2">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="team-member col-sm-6 col-lg-4 my-3 mx-auto">
          <div className="member-container">
            <img src="images/team3.jpg" className="img-fluid team-image" alt="" />
            <div className="member-info d-flex justify-content-around ">
              <div className="member-text">
                <h3 className="text-capitalize">Co Founder</h3>
                <p className="text-capitalize text-light">
                  Nikhil Parashar
                </p>
                <div className="team-icons">
                  <a href="#" className="mr-2">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Team