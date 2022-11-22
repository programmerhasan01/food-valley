import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>food menu</h2>
      </div>
      <div className="menuItemContainer">
        <span className="filterItem">Filter item</span>
        <FontAwesomeIcon icon={faChevronDown} className="menuDownArrow" />
        <div className="foodItemLists">
          <ul>
            <li>Indian</li>
            <li>Italian</li>
            <li>Maxican</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
