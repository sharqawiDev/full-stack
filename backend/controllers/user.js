const db = require("../db");

module.exports = (app) => {
  app.get("/users", async (req, res) => {
    const users = await db.models.User.findAll();
    res.json(users);
  });

  app.post("/user", async (req, res) => {
    const { firstName, lastName } = req.body;
    const user = await db.models.User.create({ firstName, lastName });
    res.json(user);
  });
};
