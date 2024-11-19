import React, { useState, useEffect }  from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

function MyOrder() {
    const [myOrder, setMyOrder] = useState([]);

    const loadMyOrders = async () => {
        //fetching food items
        let user_Id = localStorage.getItem("user");
        const myOrderResponse = await fetch(
          "http://localhost:5000/api/myorder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_Id: user_Id }),
          }
        );
        const {myOrder:{order_data}} = await myOrderResponse.json();
        console.log( order_data);
        setMyOrder(order_data);
        
      };
      
      useEffect(() => {
        loadMyOrders();
      }, []);
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="container my-5" style={{ minHeight: "560px"}}>
      <h1 className="text-center mb-4">My Orders</h1>
      {myOrder.length > 0 ? (
        <div className="row g-4">
          {myOrder.map((order, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card shadow-sm"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <div className="card-body d-flex flex-column">
                  <p className="text-muted">
                    Order Date: {new Date(order.date).toLocaleDateString()}
                  </p>
                  <h6>Items:</h6>
                  <div
                    style={{
                      maxHeight: "200px",
                      overflowY: "auto",
                      border: "1px solid #e9ecef",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    <ul className="list-group list-group-flush">
                      {order.items.map((item, idx) => (
                        <li
                          className="list-group-item d-flex align-items-center"
                          key={idx}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="img-thumbnail me-3"
                            style={{ width: "50px", height: "50px" }}
                          />
                          <div>
                            <p className="mb-1">{item.name}</p>
                            <small>
                              Quantity: {item.quantity} | Size: {item.size}
                            </small>
                          </div>
                          <span className="ms-auto text-success">
                            ₹{item.finalPrice}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-3">
                    <strong>Total Amount:</strong> ₹{order.total_amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <h3>No Orders Found</h3>
          <p>It looks like you haven't placed any orders yet.</p>
        </div>
      )}
    </div>
    <Footer />
  </>
  )
}

export default MyOrder
