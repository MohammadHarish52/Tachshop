import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@emailexample.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "JohnDoe@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@emailexample.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default user;
