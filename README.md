# armory-embeds-game-link

Generates armory embeds markup from a game link.

## Usage

```sh
npm install armory-embeds-game-link
```

```javascript
import parseGameLink from 'armory-embeds-game-link';

parseGameLink('[&CvUbAAA=]');
// <span data-armory-embeds="skins" data-armory-ids="7157"></span>
```

## Api

### `parseGameLink(string, { tag }: { tag: string }): string`
