import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div>
    <section id="team" className="py-5">
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
        {/* <article className="team-member col-sm-6 col-lg-4 my-3 mx-auto">
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
        </article> */}
      </div>
    </div>
  </section>
  </div>
//   <div className="py-5 text-center text-info background-info" style="">
//     <div className="container">
//         <div className="row">
//             <div className="mx-auto col-md-12">
//                 <h1 className="mb-3" contenteditable="true">Meet our team</h1>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-lg-4 col-md-6 p-4"> <img className="img-fluid d-block mb-3 mx-auto rounded-circle" alt="Card image cap" width="200" src="https://i.imgur.com/Ur43esv.jpg"/>
//                 <h4> <b>John kandy</b> </h4>
//                 <p className="mb-0">CEO and founder</p>
//             </div>
//             <div className="col-lg-4 col-md-6 p-4"> <img className="img-fluid d-block mb-3 mx-auto rounded-circle" src="https://i.imgur.com/8RKXAIV.jpg" alt="Card image cap" width="200"/>
//                 <h4> <b>Sam ilana</b> </h4>
//                 <p className="mb-0">Co-founder</p>
//             </div>
//             <div className="col-lg-4 p-4"> <img className="img-fluid d-block mb-3 mx-auto rounded-circle" src="https://i.imgur.com/J6l19aF.jpg" width="200"/>
//                 <h4> <b>Maria Samantha</b> </h4>
//                 <p className="mb-0">HR Manager</p>
//             </div>
//         </div>
//     </div>
// </div>
  )
}

export default Team