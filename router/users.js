import express from "express";
import {
  getUsers,
  getUser,
  storeUser,
  updateUser,
  deleteUser,
} from "../lib/users.js";
import { dbConnection } from "../lib/db.config.js";

const userRouter = express.Router();

dbConnection();

// index method
userRouter.get("/users", async (request, response) => {
  const users = await getUsers();

  if (!users.length) {
    response.status(404).json({
      message: "Users not found",
    });
  }

  response.json(users);
});

// show method
userRouter.get("/users/:id", async (request, response) => {
  const { params } = request;

  const user = await getUser({ id: params.id });

  if (!user.length) {
    response.status(404).json({
      message: "User does not exists!",
    });
  }

  response.json(user);
});

// create method
userRouter.post("/users", async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    response.status(400).json({
      message: "The user is not created!",
    });
  }

  await storeUser({ password, name, email });
  response.status(200).json({
    message: "User created succesfully!",
  });
});

// update method
userRouter.put("/users/:id", async (request, response) => {
  const { name, email, password } = request.body;
  const { id } = request.params;

  if (!name || !email || !password) {
    response.status(400).json({
      message: "The user was not updated!",
    });
  }

  await updateUser({ password, id, name, email });

  response.status(200).json({
    message: "User updated succesfully!",
  });
});

// delete method
userRouter.delete("/users/:id", async (request, response) => {
  const { id } = request.params;

  await deleteUser({ id });

  response.status(200).json({
    message: "User deleted succesfully!",
  });
});

export default userRouter;
