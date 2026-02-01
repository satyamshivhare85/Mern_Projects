import jwt from "jsonwebtoken";
const generate_password = ({ id }) => {
  let token = jwt.sign(
    { id }, // payload must be an object
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return token;
};


export default generate_password;