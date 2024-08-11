import fs from 'fs-extra'
import path from 'path'
import getTrending from './lib/getTrending.js'
import chalk from 'chalk'

const pad = n => (n < 10 ? '0' + n : n)

const main = async () => {
  try {
    const trending = await getTrending()
    const date = new Date()
    const dest = path.join(
      import.meta.dirname,
      '../data/',
      [
        date.getUTCFullYear(),
        pad(date.getUTCMonth() + 1),
        pad(date.getUTCDate()),
      ].join('-') + '.json',
    )

    console.log(
      `Successfully fetched ${chalk.blue(trending.length)} trending repositories:`,
    )
    trending.forEach((repo, i) => {
      console.log(
        `${chalk.gray((i + 1).toString() + '.')} ${repo.owner}${chalk.gray('/')}${repo.name}`,
      )
    })

    await fs.outputJSON(dest, trending)
    console.log(`Saved to ${chalk.gray(dest)}.`)
  } catch (error) {
    console.error(error)
  }
}

main()
