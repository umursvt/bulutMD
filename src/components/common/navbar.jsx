import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Navbar Component */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-lg-between bg-dark ">
        <div>
          <Link to="/" className=" text-white text-decoration-none ">
            <h1 className=" fw-normal ms-lg-5  ">BulutMD</h1>
          </Link>
        </div>
        <div className="navbar-nav ml-auto me-lg-4 me-md-2 me-sm-2  ">
          <Link to="/" className=" text-decoration-none ">
            <h2 className=" text-white  fw-light   me-lg-3">Giriş</h2>
          </Link>

          <button
            className="nav-link bg-danger text-white fw-bold px-4  "
            type="button"
          >
            <Link to="/" className=" text-decoration-none text-white  ">
              Deneme Başlat
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
