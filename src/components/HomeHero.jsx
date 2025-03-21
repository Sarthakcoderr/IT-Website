import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../assets/images/Hero.jpg"
import '../styles/HomeHero.css';

const HomeHero = () => {
  return (
    <div
      className="position-relative d-flex align-items-center text-white"
      style={{
        height: "100vh",
        background: `url(${Hero}) center/cover no-repeat`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-md-6">
            <h1>Dayal Infosystems</h1>
            <h2 className="display-4 fw-bold">Transforming Ideas into Digital Excellence</h2>
            <p className="lead">
            Empowering businesses with cutting-edge IT solutions, custom software, and innovative digital experiences.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
