import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Set the active tab based on the current path
    switch (location.pathname) {
      case "/":
        setActiveTab("Home");
        break;
      case "/add":
        setActiveTab("AddUser");
        break;
      case "/about":
        setActiveTab("About");
        break;
      default:
        setActiveTab("");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="logo">User Management System</p>
      <div className="header-right">
        <Link to="/">
          <p className={`${activeTab === "Home" ? "active" : ""}`}>Home</p>
        </Link>

        <Link to="/add">
          <p className={`${activeTab === "AddUser" ? "active" : ""}`}>
            Add User
          </p>
        </Link>

        <Link to="/about">
          <p className={`${activeTab === "About" ? "active" : ""}`}>About</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
