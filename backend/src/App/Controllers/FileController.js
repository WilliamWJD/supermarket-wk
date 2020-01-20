import File from "../Models/File";

class FileController {
  async create(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });

    res.json(file);
  }
}

export default new FileController();
