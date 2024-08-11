import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'

const pad = n => (n < 10 ? '0' + n : n)

const saveToFile = async trending => {
  const date = new Date()
  const dest = path.join(
    import.meta.dirname,
    '../../data/',
    [
      date.getUTCFullYear(),
      pad(date.getUTCMonth() + 1),
      pad(date.getUTCDate()),
    ].join('-') + '.json',
  )

  await fs.outputJSON(dest, trending)
  console.log(`Saved to ${chalk.gray(dest)}.`)

  return
}

export default saveToFile
