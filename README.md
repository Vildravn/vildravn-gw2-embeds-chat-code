# armory-embeds-chat-code

Generates armory embeds markup from a game link.

## Usage

```sh
npm install armory-embeds-chat-code
```

```javascript
import parseGameLink from 'armory-embeds-chat-code';

parseGameLink('[&CvUbAAA=]');
// <div data-armory-embeds="skins" data-armory-ids="7157"></div>
```

## Api

### `parseGameLink(chatcode: string, options: ?Options): string`

#### `Options: Object`

| property | type | description |
|-|-|-|
| tag | `string` | Custom tag for the embed, defaults to `div`. |
| attributes | `Object` | Key/value object of extra attributes to add to the markup. |
