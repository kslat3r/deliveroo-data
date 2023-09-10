const fs = require('fs/promises');

module.exports = async (data, path, varName) => {
  const str = `window.${varName} = ${JSON.stringify(data)}`;

  try {
    await fs.writeFile(`${__dirname}/../${path}`, str);
  } catch (e) {
    throw e;
  }
}