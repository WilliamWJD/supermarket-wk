// import { Op } from "sequelize";
// import * as Yup from "yup";
import List from "../Models/List";
import User from "../Models/User";

class ListController {
  async index(req, res) {
    // const { status } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    // let where = {};

    // if (status) {
    //   where = {
    //     ...where,
    //     status: {
    //       status
    //     }
    //   };
    // }

    const list = await List.findAll({
      // where,
      include: [
        {
          model: User,
          attributes: ["id", "name"],
          required: true
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
}

export default new ListController();
