import { User } from '../models/index.js';

export default {
  findByID: (req, res) => {
    const { user } = req;
    if (!user) {
      return res
        .status(400)
        .send({ error: 'Server is having an issues please try again later' });
    }
    return res.json(user);
  },

  signup: async function (req, res) {
    console.log('USER SIGN UP CONTROLLER');
    // console.log(this);

    try {
      const user = await User.create(req.body);
      const userObjJson = user.toJSON();
      return res.send({ user: userObjJson });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: 'Something is wrong' });
    }
  },
};
