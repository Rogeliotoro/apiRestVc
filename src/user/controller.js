const User = require ('./model.js')

const getUser = async (req, res) => {
    const list = await user.find({});
    res.json(list);
  };
  

module.exports = getUser