import { createRestAPIClient } from 'masto'

const sendToMastodon = async trending => {
  const masto = createRestAPIClient({
    url: process.env.MASTODON_URL,
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  })

  const title = "Today's 📈:\n\n"

  var list = trending.map(
    (repo, i) =>
      `${i + 1}. https://github.com/${repo.owner}/${repo.name} - ${repo.language ? repo.language + ', ' : ''}${repo.starsToday} ⭐ today\n`,
  )

  var status = title
  var inReplyTo = null

  for (const v of list) {
    if (status.length + v.length <= 500) {
      status += v
    } else {
      status = status.trim()
      const sent = await masto.v1.statuses.create({
        status: status,
        inReplyToId: inReplyTo,
      })
      console.log(
        `Sent to Mastodon${inReplyTo ? ' (in reply to ' + inReplyTo + ')' : ''}: ${sent.url}`,
      )
      inReplyTo = sent.id

      status = ''
    }
  }

  console.log(`All sent!`)
}

export default sendToMastodon
