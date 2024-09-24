import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUsers = (req, res) => {
  const user = req.body;

  // Correctly push a new user with a unique ID
  users.push({ ...user, id: uuid() });

  res.send("User added successfully");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};
export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User Deleted Succesfully");
};
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;
  
  res.send("User Updated Succesfully");
};
