import axios from 'axios'
import { JSDOM } from 'jsdom'

const getTrending = async () => {
  try {
    const response = await axios.get('https://github.com/trending')
    const dom = new JSDOM(response.data)
    const items = dom.window.document.querySelectorAll(
      'main>.container-lg .Box article.Box-row',
    )

    let repos = []
    items.forEach(el => {
      const repo = {}

      const ownerAndRepo = el
        .querySelector('h2 a')
        .textContent.trim()
        .replace(/\s/gm, '')
        .split('/')
      repo.owner = ownerAndRepo[0]
      repo.name = ownerAndRepo[1]

      repo.description = el.querySelector('p.col-9')?.textContent.trim() ?? null

      repo.language =
        el
          .querySelector('[itemprop="programmingLanguage"]')
          ?.textContent.trim() ?? null

      repo.stars = parseInt(
        el
          .querySelector('[aria-label="star"]')
          .parentNode.textContent.trim()
          .replace(',', ''),
        10,
      )
      repo.forks = parseInt(
        el
          .querySelector('[aria-label="fork"]')
          .parentNode.textContent.trim()
          .replace(',', ''),
        10,
      )

      repo.builtBy = []
      el.querySelectorAll('a[data-hovercard-type="user"]').forEach(el => {
        repo.builtBy.push(el.getAttribute('href').split('/')[1])
      })

      repo.starsToday = parseInt(
        el
          .querySelector('span.float-sm-right')
          .textContent.trim()
          .replace(' stars today', ''),
        10,
      )

      repos.push(repo)
    })

    return repos
  } catch (error) {
    throw error
  }
}

export default getTrending
