import React from 'react'
export default function navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      Quetta Resturent
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="/logo.png"
          height="50"
          width="50"
          alt="Quetta-Hotel"
          loading="lazy"
        />
      </a>
      
    </div>

    <div className="d-flex align-items-center">
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"> </i>
      </a>

    </div>
 
  </div>
</nav>

)
}
