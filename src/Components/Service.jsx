import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div><section>
    <div className=" bg-linear" id="services-section">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-5 position-relative">
            <h2 className="section-title text-center mt-5">Services</h2>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4">
                <i className="fab fa-affiliatetheme fa-2x" />
              </div>
              <div className="service-about">
                <h3>Video editing </h3>
                <p>
                We have an eye for detail and a keen understanding of how to create
                 a polished final product that truly stands out. Whether we are working
                  on a commercial project or a personal video, you bring the same level
                   of dedication and creativity to every task. Clients consistently praise
                  our professionalism, responsiveness, and willingness to go above and
                     beyond to ensure their satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4">
                <i className="fab fa-adobe fa-2x" />
              </div>
              <div className="service-about">
                <h3>Content Writer</h3>
                <p>
                Our ability to produce high-quality, engaging content is impressive,
                 and your attention to detail ensures that every piece is polished and
                  error-free.We have a talent for taking complex topics and breaking
                   them down into easy-to-understand language that resonates with readers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4">
                <i className="fab fa-airbnb fa-2x" />
              </div>
              <div className="service-about">
                <h3>Graphic Designing</h3>
                <p>
                Our graphic designing services are simply amazing! Your creativity,
                 attention to detail, and ability to bring ideas to life are truly
                  remarkable.We have a talent for creating designs that are both
                   visually stunning and highly effective at communicating key messages.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4">
                <i className="fab fa-amazon fa-2x" />
              </div>
              <div className="service-about">
                <h3>Social media management</h3>
                <p>
                Our social media management services are top-notch! Your ability to 
                craft engaging content, build a strong online presence, and interact 
                with followers is truly remarkable.We have a talent for creating a 
                cohesive brand image and using social media to effectively communicate 
                with your clients' target audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Service