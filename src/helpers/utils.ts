const bcrypt = require('bcrypt');
const slugify = require('slugify');

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const slugifyName = (name: string) => {
  return slugify(name + ' ' + (Math.floor(Math.random() * 90000) + 10000), {
    lower: true,
  });
};

const utils = {
  hashPassword,
  slugifyName,
};

export default utils;
