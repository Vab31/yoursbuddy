import './About.css'

const About = () => {
  return (
    <div><section id="about" className="about m-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src="images/chess.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <h3 className="font-weight-bold">About Us </h3>
          <p>
          We have been privileged to have won the trust of leading
           media brands - both global and local - from around the world.
            We’ve worked with Indian Governments, Trade Associations,
             Public & Private sector companies and various Marketing/Advertising Agencies.
          </p>
          <div className="row">
            <div className="col-md-6">
              <i className="fas fa-file-code" />
              <h4>Development Goal</h4>
              <p>
                India's Top Media Agency in coming
                3 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About