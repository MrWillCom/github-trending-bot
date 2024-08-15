<img src="./assets/icon-rounded.svg" alt="Icon" height="72">

# GitHub Trending Bot

A bot fetches daily GitHub trending repositories.

## Development

```sh
$ pnpm i
```

After installing dependencies, run `pnpm start` to execute the script.

To enable posting to Mastodon, create `.env` and fill the blanks according to `.env.example`.

> [!NOTE]
> The access token requires `write:statuses` permission.

## Icon

The icon is used as the bot's avatar, created in [ray.so](https://www.ray.so/icon?fileName=icon&icon=arrow-ne&backgroundRadius=0&backgroundStrokeSize=0&backgroundStrokeColor=%23722020&backgroundRadialGlare=true&backgroundNoiseTexture=true&backgroundNoiseTextureOpacity=25&backgroundStrokeOpacity=100&backgroundPosition=50%25%2C0%25&backgroundSpread=100&backgroundAngle=30&iconSize=400&iconOffsetX=0&iconOffsetY=0&selectedPresetIndex=null&customSvg=undefined&backgroundFillType=Linear&backgroundStartColor=%23D43636&backgroundEndColor=%23470707&iconColor=%23FFF0F0).

## References

- [Do you know when trending repositories on GitHub are usually updated? · community · Discussion #64295](https://github.com/orgs/community/discussions/64295)
