import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import data from "../data/menu.json";
import Tabs from "./tabs";
import ModalOffCanvas from "./modaloffcanvas";

export default function Cards() {
  const categories = [...new Set(data.menu.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredData = selectedCategory
    ? data.menu.filter((item) => item.category === selectedCategory)
    : data.menu;

  // Modal
  const [selectedDish, setSelectedDish] = useState(null);
  const handleShowModal = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <>
      <section style={{ backgroundColor: "#ffff" }}>
        <div className="text-center container py-5">
          <Tabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="row">
            {filteredData.map((d, index) => (
              <div className="col-lg-4 col-md-12 mb-4" key={d.id}>
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: 300, width: 100 }}
                      src={d.image}
                      className="w-100"
                    />
                    <a href="#!" onClick={() => handleShowModal(d)}>
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">
                              {d.tag}
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-3">{d.dish}</h5>

                    <p>Category: {d.category}</p>
                    <h6 className="mb-3">Price: {d.price}</h6>
                    <p
                      style={{
                        maxWidth: "250px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {d.description}
                    </p>
                    <MDBBtn
                      className="mx-2"
                      color="secondary"
                      type="button"
                      onClick={() => handleShowModal(d)}
                    >
                      Order
                    </MDBBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ModalOffCanvas selectedDish={selectedDish} />
    </>
  );
}
