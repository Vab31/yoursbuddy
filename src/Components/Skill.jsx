import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <div>    <section id="skills" class="skills">
    <div class="container">
      <div class="row">
          <div class="col-xl-4 col-lg-5">
          </div>
        <div class="col-xl-8 col-lg-7 d-flex">
          <div class="icon-boxes d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="fab fa-fly"></i>
                  <h4>Founder</h4>
                  <p>Lokesh Rajput<br></br>Leader And Marketer</p>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="fas fa-leaf"></i>
                  <h4>Co Founder</h4>
                  <p>Kshitiz sharma<br></br> Team Maneger </p>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="fas fa-virus"></i>
                  <h4>Co Founder</h4>
                  <p>Nikhil Parashar<br></br> Main Video Editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Skill