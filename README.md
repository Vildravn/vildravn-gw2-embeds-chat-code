# armory-embeds-chat-code
[![NPM version](http://img.shields.io/npm/v/armory-embeds-chat-code.svg?style=flat-square)](https://www.npmjs.com/package/armory-embeds-chat-code)
[![NPM downloads](http://img.shields.io/npm/dm/armory-embeds-chat-code.svg?style=flat-square)](https://www.npmjs.com/package/armory-embeds-chat-code)

Generates armory embeds markup from a chat code.

## Usage

```sh
npm install armory-embeds-chat-code
```

```javascript
import parseChatCode from 'armory-embeds-chat-code';

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
