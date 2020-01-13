// import { Op } from "sequelize";
// import * as Yup from "yup";
import List from "../Models/List";
import User from "../Models/User";
import Detail from "../Models/Detail";

class ListController {
  async index(req, res) {
    const { status } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};

    if (status) {
      where = {
        ...where,
        status
      };
    }

    const list = await List.findAll({
      where,
      include: [
        {
          model: User,
          attributes: ["id", "name"],
          required: true
        },
        {
          model: Detail,
          attributes: ["description", "quantity", "status"]
        }
      ],
      limit,
      offset: limit * page - limit
    });

    return res.json(list);
  }

  async create(req, res) {
    const list = await List.create({
      user_id: req.params.user_id
    });
    return res.status(201).json(list);
  }

  async update(req, res) {
    const list = await List.findByPk(req.params.list_id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    await list.update(req.body);
    return res.status(201).json(list);
  }

  async destroy(req, res) {
    const list = await List.findByPk(req.params.list_id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    await list.destroy();
    return res.status(201).json({ message: "List exclused success" });
  }
}

export default new ListController();
