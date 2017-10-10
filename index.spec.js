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

  it('should pass through extra as attributes', () => {
    const chatcode = '[&CvUbAAA=]';
    const attributes = { 'data-armory-blank-text': 'cool', class: 'gw2' };

    const actual = markup(chatcode, { attributes });

    assert.equal(
      actual,
      '<div data-armory-embeds="skins" data-armory-ids="7157" data-armory-blank-text="cool" class="gw2"></div>',
    );
  });

  it('should support complex chat codes', () => {
    const chatcode = '[&AgFzPADg3g4AAJaVAAAkuwAA]';

    const actual = markup(chatcode);

    assert.equal(actual, '<div data-armory-embeds="items" data-armory-ids="15475" data-armory-15475-skin="3806" data-armory-15475-upgrades="38294,47908"></div>');
  });
});
