import './About.css'
import img from './lokesh.jpeg'

const About = () => {
  return (
    <div>
    
    <section id="about" className="about m-2">
    <div className="container">
      <div className="row">
     
    <div className="col-lg-4 teambox">
    <div className="column" style={{width:"300px"}}>
     <div className="card">
      <img src={img} alt="Jane" style= {{width:"100%",height:"300px"}}/>
      <div className="container">
        <h2>Lokesh Singh</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button"><a href="https://wa.me/919999149111">Contact</a></button></p>
      </div>
    </div>
 </div>


</div>
        <div className="col-lg-8 pt-4 pt-lg-0 lg:mt-8">
          <h3 className="font-weight-bold">About Us </h3>
          <p className='abody lg:mt-90px'>
          We have been privileged to have won the trust of leading
           media brands - both global and local - from around the world.
            We’ve worked with Indian Governments, Trade Associations,
             Public & Private sector companies and various Marketing/Advertising Agencies.
          </p>
          <div className="row">
            <div className="pl-3">
              
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