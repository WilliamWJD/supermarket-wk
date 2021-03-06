import { Op } from "sequelize";
import * as Yup from "yup";
import User from "../Models/User";

class UserController {
  async index(req, res) {
    const { name, email } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};

    if (name) {
      where = {
        ...where,
        name: {
          [Op.iLike]: name
        }
      };
    }

    if (email) {
      where = {
        ...where,
        email: {
          [Op.iLike]: email
        }
      };
    }

    const user = await User.findAll({
      attributes: { exclude: ["password", "password_hash"] },
      where,
      limit,
      offset: limit * page - limit
    });
    return res.json(user);
  }

  async show(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Resource not found" });
    }
    return res.json(user);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      image_path: Yup.string(),
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

    const {
      id,
      name,
      email,
      image_path,
      createdAt,
      updatedAt
    } = await User.create(req.body);

    return res
      .status(201)
      .json({ id, name, email, image_path, createdAt, updatedAt });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      image_path: Yup.string(),
      oldPassword: Yup.string().min(8),
      password: Yup.string()
        .min(8)
        .when("oldPassword", (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      passwordConfirmation: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      )
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema." });
    }

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { oldPassword } = req.body;

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "User password not match." });
    }

    const {
      id,
      name,
      email,
      image_path,
      createdAt,
      updatedAt
    } = await user.update(req.body);

    return res
      .status(201)
      .json({ id, name, email, image_path, createdAt, updatedAt });
  }

  async destroy(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    return res.json({ message: "Excluido com sucesso!" });
  }
}

export default new UserController();
