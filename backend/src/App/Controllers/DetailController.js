import * as Yup from "yup";
import Detail from "../Models/Detail";

class DetailController {
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
