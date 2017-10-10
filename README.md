# armory-embeds-game-link

Generates armory embeds markup from a game link.

## Usage

```sh
npm install armory-embeds-game-link
```

```javascript
import parseGameLink from 'armory-embeds-game-link';

parseGameLink('[&CvUbAAA=]');
// <div data-armory-embeds="skins" data-armory-ids="7157"></div>
```

## Api

### `parseGameLink(string, { tag }: ?Options): string`

#### `Options: Object`

| property | type | description |
|-|-|-|
| tag | `string` | Custom tag for the embed, defaults to `div`. |
