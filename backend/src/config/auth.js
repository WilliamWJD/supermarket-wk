require("dotenv").config();

export default {
  secret: process.env.SECRET_KEY,
  expireIn: "7d"
};
