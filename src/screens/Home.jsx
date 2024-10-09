import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  return (
    <>
    <div>
      {/* Navbar */}
      <Navbar />
    </div>
    <div>
      {/* carousel */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div class="carousel-caption" style={{"zIndex":"10"}}>
            <p className="fw-bold fst-italic" style={{"fontSize":"6rem","lineHeight":"1.2","margin":"0"}}>GetFood</p>
            <p className="fs-3">Discover the best food and beverages here </p>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 py-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
              style={{ width: "100px", height: "90vh", "filter": "brightness(0.5)" }}
              className="d-block w-100 max-h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              style={{ width: "100px", height: "90vh", "filter": "brightness(0.5)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" >
            <img
              src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
              style={{ width: "100px", height: "90vh", "filter": "brightness(0.5)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className="m-3">
      {/* card */}
      <Card />
    </div>
    <div>
      {/* footer */}
      <Footer />      
    </div>
    </>
  );
}

export default Home;
