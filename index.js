const { decode } = require('gw2e-chat-codes');

const objectToAttributes = (obj) => {
  if (!obj) {
    return '';
  }

  return ` ${Object.keys(obj).map((prop) => `${prop}="${obj[prop]}"`).join(' ')}`;
};

function generateMarkup (chatcode, { tag = 'div', attributes } = {}) {
  const unsupported = ['map', 'recipe', 'skin', 'outfit', 'objective', 'build'];

  const data = decode(chatcode);
  if (!data) {
    return '[invalid link]';
  }

  if (unsupported.includes(data.type)) {
    return `[unsupported link: ${data.type}]`;
  }

  let attrs = attributes;
  if (data.skin) {
    if (!attrs) {
      attrs = {};
    }
    attrs[`data-armory-${data.id}-skin`] = data.skin;
  }

  if (data.upgrades) {
    if (!attrs) {
      attrs = {};
    }
    attrs[`data-armory-${data.id}-upgrades`] = data.upgrades.join(',');
  }

  return `<${tag} data-armory-embed="${data.type}s" data-armory-ids="${data.id}"${objectToAttributes(attrs)}></${tag}>`;
}

module.exports = generateMarkup;