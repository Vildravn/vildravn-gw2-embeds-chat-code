const { decode } = require('gw2e-chat-codes');

function generateMarkup (gamecode, { tag = 'div' } = {}) {
  const data = decode(gamecode);
  if (!data) {
    return '[invalid]';
  }

  return `<${tag} data-armory-embeds="${data.type}s" data-armory-ids="${data.id}"></${tag}>`;
}

module.exports = generateMarkup;
