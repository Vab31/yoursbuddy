import React from 'react'
import './Client.css'

const Client = () => {
  return (
    <div><section id="clients" className="clients mt-5">
    <div className="container">
      {/* section title */}
      <div className="row">
        <div className="col-10 mx-auto col-sm-6 text-center">
          <h1 className="text-capitalize mb-4">Our Clients</h1>
        </div>
      </div>
      {/* end section title */}
    </div>
    <div className="row no-gutters clients-wrap clearfix">
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/clint 1.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 2.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 3.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 4.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 5.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 6.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 7.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="client-logo">
          <img src="images/client 8.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Client