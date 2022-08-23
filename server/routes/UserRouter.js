const router = require('express').Router();
const bycrypt = require('bcrypt');
const { User, Role } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/signup')
  .post(async (req, res) => {
    try {
      const {
        name, email, password, address,
        phone, role,
      } = req.body;
      if (name && email && password && address && phone && role) {
        const roles = await Role.findOne({ where: { id: +role } });
        const pass = await bycrypt.hash(password, 10);
        const newUser = await User.create({
          name, email, password: pass, role_id: roles.id, address, phone,
        });
        console.log(newUser);
        req.session.user = { name: newUser.name, id: newUser.id };
        return res.json({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          address: newUser.address,
          phone: newUser.phone,
        });
      }
      return res.sendStatus(401);
    } catch (err) {
      console.log(err);
      return res.sendStatus(401);
    }
  });

router.route('/signin')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const newUser = await User.findOne({
          where: { email },
        });
        if (newUser && await bycrypt.compare(password, newUser.password)) {
          req.session.user = {
            id: newUser.id,
            name: newUser.name,
          };
        }
        return res.json({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          address: newUser.address,
          phone: newUser.phone,
        });
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    }
    return res.sendStatus(200);
  });

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.json({ message: 'нет user' });
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('Ferma').sendStatus(200);
  });

module.exports = router;
