import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [foodItemData, setFoodItemData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const loadData = async () => {
    //fetching food items
    const foodDataResponse = await fetch(
      "https://get-food-backend-teal.vercel.app/api/foodItemDatas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const foodData = await foodDataResponse.json();
    setFoodItemData(foodData);

    //fetching food categories
    const foodCategoryResponse = await fetch(
      "https://get-food-backend-teal.vercel.app/api/foodCategories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const foodCategory = await foodCategoryResponse.json();
    setCategoryData(foodCategory);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {/* Navbar */}
        <Navbar />
      </div>
      <div>
        {/* carousel */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <p
                className="fw-bold fst-italic display-1"
                style={{ lineHeight: "1.2", margin: "0" }}
              >
                GetFood
              </p>
              <p className="h4 d-md-block">
                Discover the best food and beverages here
              </p>
              <div className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2 py-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearchItem(e.target.value)}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                className="d-block w-100 img-fluid"
                style={{ height: "90vh", filter: "brightness(0.5)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                className="d-block w-100 img-fluid"
                style={{ height: "90vh", filter: "brightness(0.5)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
                className="d-block w-100 img-fluid"
                style={{ height: "90vh", filter: "brightness(0.5)" }}
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
      <div className="container">
        {/* card */}
        {categoryData.length > 0 ? (
          categoryData.map((catData) => {
            return (
              <div className="row mb-3">
                <div key={catData._id} className="fw-bold fs-3 mt-3">
                  {" "}
                  {catData.CategoryName}{" "}
                </div>
                <hr className="mt-2 mb-4" />
                {foodItemData.length > 0 &&
                  foodItemData
                    .filter(
                      (foodItem) =>
                        foodItem.CategoryId === catData._id &&
                        foodItem.name
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                    )
                    .map((foodItem) => {
                      return (
                        <div
                          className="col-12 col-sm-6 col-lg-4 col-xl-3"
                          key={foodItem._id}
                        >
                          <Card foodItem={foodItem} />
                        </div>
                      );
                    })}
              </div>
            );
          })
        ) : (
          <div>Foods Category not available</div>
        )}
      </div>

      <div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
