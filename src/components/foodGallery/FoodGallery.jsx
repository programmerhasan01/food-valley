import React from "react";
import "./FoodGallery.css";

function FoodGallery() {
  return (
    <div className="foodGallery">
      <div class="grid-wrapper">
        <div class="item1">
          <img src="./images/Mexican.png" alt="" />
          <button>Mexican</button>
        </div>
        <div class="item2">
          <img src="./images/italian1.png" alt="" />
          <button>Italian</button>
        </div>
        <div class="item3">
          <img src="./images/Indian1.png" alt="" />
          <button>Indian</button>
        </div>
        <div class="item4">
          <img src="./images/Indian2.png" alt="" />
          <button>Indian</button>
        </div>
        <div class="item5">
          <img src="./images/Mexican2.png" alt="" />
          <button>Mexican</button>
        </div>
        <div class="item7">
          <img src="./images/Mexican3.png" alt="" />
          <button>Mexican</button>
        </div>
        <div class="item6">
          <img src="./images/Italian2.png" alt="" />
          <button>Italian</button>
        </div>
      </div>
    </div>
  );
}

export default FoodGallery;
