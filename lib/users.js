import { connection } from "./db.config.js";

export const getUsers = async () => {
  try {
    const users = await connection.promise().query(`SELECT * FROM users`);

    return users[0];
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async ({ id }) => {
  try {
    const user = await connection
      .promise()
      .query(`SELECT * FROM users WHERE id = ?`, [id]);
    return user[0];
  } catch (e) {
    console.error(e);
  }
};

export const storeUser = async ({ name, email, password }) => {
  try {
    const user = await connection
      .promise()
      .query(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [
        name,
        email,
        password,
      ]);
    return true;
  } catch (e) {
    console.error(e);
  }
};

export const updateUser = async ({ id, name, email, password }) => {
  try {
    const user = await connection
      .promise()
      .query(
        `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`,
        [name, email, password, id]
      );

    return true;
  } catch (e) {
    console.error(e);
  }
};

export const deleteUser = async ({ id }) => {
  try {
    await connection.promise().query(`DELETE FROM users WHERE id = ?`, [id]);
    return true;
  } catch (e) {
    console.error(e);
  }
};
