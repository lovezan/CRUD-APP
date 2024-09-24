// AddEdit.js

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser();
    }
  }, [id]);

  const getSingleUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/user/${id}`);
      if (response.status === 200) {
        setState({ ...response.data[0] });
      } else {
        toast.error("Failed to fetch user details");
      }
    } catch (error) {
      toast.error("An error occurred while fetching user details");
      console.error(error);
    }
  };

  const addContact = async (data) => {
    try {
      const response = await axios.post("http://localhost:8082/user", data);
      if (response.status === 200) {
        toast.success("User added successfully!");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      toast.error("Error adding user");
      console.error(error);
    }
  };

  const updateUser = async (data, id) => {
    try {
      const response = await axios.put(`http://localhost:8082/user/${id}`, data);
      if (response.status === 200) {
        toast.success("User updated successfully!");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      toast.error("Error updating user");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide values for all input fields");
    } else {
      if (id) {
        updateUser(state, id);
      } else {
        addContact(state);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="add-edit-container">
      <h1 className="title">{id ? "Edit User" : "Add User"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={handleInputChange}
            value={name || ""}
            required
          />
          <span className="emoji">😊</span>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
            value={email || ""}
            required
          />
          <span className="emoji">📧</span>
        </div>

        <div className="input-container">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            id="contact"
            name="contact"
            placeholder="Enter Contact No."
            onChange={handleInputChange}
            value={contact || ""}
            required
          />
          <span className="emoji">📞</span>
        </div>

        <input
          type="submit"
          className="submit-btn"
          value={id ? "Update" : "Submit"}
        />
      </form>
    </div>
  );
}

export default AddEdit;
