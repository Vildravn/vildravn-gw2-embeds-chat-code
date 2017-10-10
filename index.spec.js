const assert = require('assert');
const markup = require('./');

describe('markup', () => {
  it('should generate markup', () => {
    const gamecode = '[&AgFuLgEA]';

    const actual = markup(gamecode);

    assert.equal(actual, '<div data-armory-embeds="items" data-armory-ids="77422"></div>');
  });

  it('should use custom tag', () => {
    const gamecode = '[&CvUbAAA=]';

    const actual = markup(gamecode, { tag: 'span' });

    assert.equal(actual, '<span data-armory-embeds="skins" data-armory-ids="7157"></span>');
  });

  it('should return invalid text if invalid', () => {
    const gamecode = '&AgGuLgEK]';

    const actual = markup(gamecode);

    assert.equal(actual, '[invalid]');
  });
});
