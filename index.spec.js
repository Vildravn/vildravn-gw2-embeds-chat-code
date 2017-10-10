const assert = require('assert');
const markup = require('./');

describe('markup', () => {
  it('should generate markup', () => {
    const chatcode = '[&AgFuLgEA]';

    const actual = markup(chatcode);

    assert.equal(actual, '<div data-armory-embeds="items" data-armory-ids="77422"></div>');
  });

  it('should use custom tag', () => {
    const chatcode = '[&CvUbAAA=]';

    const actual = markup(chatcode, { tag: 'span' });

    assert.equal(actual, '<span data-armory-embeds="skins" data-armory-ids="7157"></span>');
  });

  it('should return invalid text if invalid', () => {
    const chatcode = '&AgGuLgEK]';

    const actual = markup(chatcode);

    assert.equal(actual, '[invalid]');
  });
});
