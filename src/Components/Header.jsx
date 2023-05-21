import './Header.css'

const Header = () => {
  return (
    <div>
        
     <script src="https://kit.fontawesome.com/332a215f17.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/332a215f17.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </link>


    <header id="header">
  <nav className="navbar navbar-expand-lg px-4">
    <a href="#" className="navbar-brand">
      <span className="font-weight-bold text-uppercase logo">Yours Buddy</span>
    </a>
    <button
      type="button"
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#myNavbar"
    >
      <span className="toggler-icon">
        <i className="fas fa-bars" />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="navbar-nav text-capitalize mx-auto">
        <li className="nav-item active">
          <a href="#h" className="nav-link">
            home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            about
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            team
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li> */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-info-items d-none d-lg-flex">
        {/* single info */}
        <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
          <span className="info-icon mx-lg-3">
            <i className="fab fa-whatsapp-square fa-2x app" />
          </span>
          <p className="mb-0">+91 9999149111 </p>
        </div>
        {/* single info */}
      </div>
    </div>
  </nav>
</header>

    </div>
  )
}

export default Header