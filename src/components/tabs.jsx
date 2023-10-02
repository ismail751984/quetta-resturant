import React, { useState } from "react";

export default function Tabs({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <ul className="nav nav-tabs mb-3" id="tab">
      {categories.map((category, index) => (
        <li className="nav-item" role="presentation" key={index}>
          <a
            className={`nav-link ${
              selectedCategory === category ? "active" : ""
            }`}
            id={index}
            data-mdb-toggle="tab"
            role="tab"
            aria-controls={index}
            aria-selected={selectedCategory === category ? "true" : "false"}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}
