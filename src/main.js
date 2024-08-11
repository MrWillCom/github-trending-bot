import chalk from 'chalk'

import getTrending from './lib/getTrending.js'
import saveToFile from './lib/saveToFile.js'

const main = async () => {
  try {
    const trending = await getTrending()

    console.log(
      `Successfully fetched ${chalk.blue(trending.length)} trending repositories:`,
    )
    trending.forEach((repo, i) => {
      console.log(
        `${chalk.gray((i + 1).toString() + '.')} ${repo.owner}${chalk.gray('/')}${repo.name}`,
      )
    })

    await saveToFile(trending)
  } catch (error) {
    console.error(error)
  }
}

main()
