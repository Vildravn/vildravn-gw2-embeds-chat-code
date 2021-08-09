# vildravn-gw2-embeds-chat-code
[![NPM version](http://img.shields.io/npm/v/vildravn-gw2-embeds-chat-code.svg?style=flat-square)](https://www.npmjs.com/package/vildravn-gw2-embeds-chat-code)
[![NPM downloads](http://img.shields.io/npm/dm/vildravn-gw2-embeds-chat-code.svg?style=flat-square)](https://www.npmjs.com/package/vildravn-gw2-embeds-chat-code)

Generates armory embeds markup from a chat code.

Forked from [madou/armory-embeds-chat-code](https://github.com/madou/armory-embeds-chat-code).

## Usage

```sh
npm install vildravn-gw2-embeds-chat-code
```

```javascript
import parseChatCode from 'vildravn-gw2-embeds-chat-code';

parseChatCode('[&CvUbAAA=]');
// <div data-armory-embed="skins" data-armory-ids="7157"></div>
```

## Api

### `parseChatCode(chatcode: string, options: ?Options): string`

#### `Options: Object`

| property | type | description |
|-|-|-|
| tag | `string` | Custom tag for the embed, defaults to `div`. |
| attributes | `Object` | Key/value object of extra attributes to add to the markup. |
