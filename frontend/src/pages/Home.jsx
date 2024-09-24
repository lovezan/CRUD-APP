import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8082/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure that you want to delete this user?")) {
      const response = await axios.delete(`http://localhost:8082/user/${id}`);
      if (response.status === 200) {
        toast.success("User deleted successfully!");
        getUsers(); // Refresh the data after deletion
      } else {
        toast.error("Failed to delete the user");
      }
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">User Management System</h1>
      <Link to="/add" className="add-user-link">
        Add User
      </Link>
      <table className="style-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`} className="edit-link">
                    Edit
                  </Link>
                  <Link
                    className="delete-link"
                    onClick={() => onDeleteUser(item.id)}
                  >
                    Delete
                  </Link>
                  <Link to={`/view/${item.id}`} className="view-link">
                    View
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
