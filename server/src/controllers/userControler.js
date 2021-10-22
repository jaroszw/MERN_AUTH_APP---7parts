import User from "../models/index";

export default {
  findByID: (req, res) => {
    const { user } = req;
    if (!user) {
      return res
        .status(400)
        .send({ error: "Server is having an issues please try again later" });
    }
    return res.json(user);
  },

  function async signup (req, res) {
    try {
      const user = await User.create(req.body);
      const userObjJson = user.toJSON();
      return res.send({ user: userObjJson });
    } catch (error) {
      console.log(error);
    }
  },
};
