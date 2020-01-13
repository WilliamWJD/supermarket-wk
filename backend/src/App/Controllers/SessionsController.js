class SessionsController {
  async create(req, res) {
    return res.status(401).json({ error: "" });
  }
}

export default new SessionsController();
