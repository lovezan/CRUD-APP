import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const { id } = useParams(); // Get the user ID from URL parameters
  const [user, setUser] = useState({}); // State to hold user data

  useEffect(() => {
    getUserById(); // Fetch user data on component load
  }, [id]);

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/user/${id}`);
      if (response.status === 200) {
        setUser(response.data[0]); // Set user data in state
      } else {
        console.error("Error fetching user details");
      }
    } catch (error) {
      console.error("An error occurred while fetching user data", error);
    }
  };

  return (
    <div className="view-container">
      <h1 className="title">View User Details</h1>

      <div className="user-details">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Contact:</strong> {user.contact}
        </p>
      </div>

      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default View;
