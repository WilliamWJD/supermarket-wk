import * as Yup from "yup";
import Detail from "../Models/Detail";
import List from "../Models/List";

class DetailController {
  async index(req, res) {
    const { list_id } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};

    if (list_id) {
      where = {
        ...where,
        list_id
      };
    }

    const detail = await Detail.findAll({
      where,
      include: [
        {
          model: List,
          attributes: ["id", "status"],
          required: true
        }
      ],
      limit,
      offset: limit * page - limit
    });

    return res.json(detail);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      quantity: Yup.number()
        .integer()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema" });
    }

    const detail = await Detail.create({
      list_id: req.params.list_id,
      ...req.body
    });

    return res.status(201).json(detail);
  }
}

export default new DetailController();
