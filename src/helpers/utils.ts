const fs = require('fs');
const bcrypt = require('bcrypt');
const slugify = require('slugify');

const readData = (dir, callback = null) => {
  if (callback) {
    return new Promise((resolve, reject) => {
      fs.readFile(dir, 'utf-8', (err, content) => {
        if (err) reject(err);
        else resolve(callback(JSON.parse(content)));
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      fs.readFile(dir, 'utf-8', (err, content) => {
        if (err) reject(err);
        else resolve(JSON.parse(content));
      });
    });
  }
};

const hashPasswordSync = (password) => {
  return bcrypt.hash(password, 10);
};

const hashPassword = (password) => {
  return new Promise(async (resolve, _) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    resolve(hashedPassword);
  });
};

const slugifyName = (name) => {
  return slugify(name + ' ' + (Math.floor(Math.random() * 90000) + 10000), {
    lower: true,
  });
};

const utils = {
  readData,
  hashPassword,
  hashPasswordSync,
  slugifyName,
};

export default utils;
