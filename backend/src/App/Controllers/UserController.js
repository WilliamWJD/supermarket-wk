import * as Yup from "yup";
import User from "../Models/User";

class UserController {
  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(8),
      passwordConfirmation: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      )
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema." });
    }

    const { id, name, email, createdAt, updatedAt } = await User.create(
      req.body
    );

    return res.status(201).json({ id, name, email, createdAt, updatedAt });
  }
}

export default new UserController();
