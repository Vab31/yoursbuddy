import React from 'react'
import './Client.css'

const Client = () => {
  return (
    <div>    <section id="review" className="review-area ptb_100">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
                {/* <!-- Section Heading --> */}
                <div className="section-heading text-center mb-5">
                    <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                        <i className="far fa-lightbulb text-primary mr-1"></i>
                        <span className="text-primary mt-2" >Customer's </span>
                        Reviews
                    </span>
                    <h2 className="text-capitalize">What our customers are saying</h2>
                    {/* <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                    </p>
                    <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Laborum obcaecati.</p> */}
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4 res-margin ">
                {/* <!-- Single Review --> */}
                <div className="single-review card">
                    {/* <!-- Card Top --> */}
                    <div className="card-top p-4">
                        <div className="review-icon">
                          
                        </div>
                        <h4 className="text-primary mt-4 mb-3">Excellent service &amp; support!!</h4>
                      
                      
                        <div className="review-text">
                            <p>Working with Yoursbuddy has been a game-changer for my business. Their team of experts possesses an in-depth understanding of the media landscape and an ability to craft strategies that truly resonate with the target audience. They took the time to thoroughly understand my brand, objectives, and target market, allowing them to tailor their approach to my specific needs.</p>
                        </div>
                        {/* <!-- Quotation Icon --> */}
                        <div className="quot-icon">
                            <img className="avatar-md" src="#" alt=""/>
                        </div>
                    </div>
                    {/* <!-- Reviewer --> */}
                    <div className="reviewer media bg-gray p-4">
                        {/* <!-- Reviewer Thumb --> */}
                        <div className="reviewer-thumb">
                            <img className="avatar-lg radius-100" src="assets/img/avatar/avatar-1.png" alt=""/>
                        </div>
                        {/* <!-- Reviewer Media --> */}
                        <div className="reviewer-meta media-body align-self-center ml-4">
                            <h5 className="reviewer-name color-primary mb-2">Chaman Yadav</h5>
                            <h6 className="text-secondary fw-6">Creater, Rccodex</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 res-margin">
                {/* <!-- Single Review --> */}
                <div className="single-review card">
                    {/* <!-- Card Top --> */}
                    <div className="card-top p-4">
                        <div className="review-icon">
                       
                        </div>
                        <h4 className="text-primary mt-4 mb-3">Nice work! Keep it up</h4>
                        {/* <!-- Review Text --> */}
                        <div className="review-text">
                            <p>
                            Yoursbuddy apart is their creativity and innovation. 
                            They consistently delivered fresh, captivating ideas that elevated my brand and helped it stand out in a crowded marketplace. 
                            Their attention to detail and commitment to excellence ensured that every campaign they executed was flawless and impactful.
                            </p>
                        </div>
                        {/* <!-- Quotation Icon --> */}
                        <div className="quot-icon">
                            <img className="avatar-md" src="assets/img/icon/quote.png" alt=""/>
                        </div>
                    </div>
                    {/* <!-- Reviewer --> */}
                    <div className="reviewer media bg-gray p-4">
                        {/* <!-- Reviewer Thumb --> */}
                        <div className="reviewer-thumb">
                            <img className="avatar-lg radius-100" src="assets/img/avatar/avatar-2.png" alt=""/>
                        </div>
                        {/* <!-- Reviewer Media --> */}
                        <div className="reviewer-meta media-body align-self-center ml-4">
                            <h5 className="reviewer-name color-primary mb-2">Vinita</h5>
                            <h6 className="text-secondary fw-6">Creater, uncle_rupee </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              
                <div className="single-review card">
                
                    <div className="card-top p-4">
                        <div className="review-icon">
                            
                        </div>
                        <h4 className="text-primary mt-4 mb-3">Great support!!</h4>
                       
                         <div className="review-text">
                            <p>The communication from Yoursbuddy was exemplary. They kept me informed at every stage, providing regular updates, insights, and analytics to demonstrate the impact of their efforts. Their transparency and willingness to collaborate made me feel like a valued partner rather than just another client.</p>
                        </div>
                       
                        <div className="quot-icon">
                            <img className="avatar-md" src="assets/img/icon/quote.png" alt=""/>
                        </div>
                    </div>
                  
                    <div className="reviewer media bg-gray p-4">
                        
                        <div className="reviewer-thumb">
                            <img className="avatar-lg radius-100" src="assets/img/avatar/avatar-3.png" alt=""/>
                        </div>
                        
                        <div className="reviewer-meta media-body align-self-center ml-4">
                            <h5 className="reviewer-name color-primary mb-2">Lokesh Rajput Singh</h5>
                            <h6 className="text-secondary fw-6">official_lokeshrajput</h6>
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

export default Client