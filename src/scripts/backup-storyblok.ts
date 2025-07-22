import StoryblokClient from 'storyblok-js-client'
import { writeFile } from 'node:fs/promises'

async function main() {
  const storyblokClient = new StoryblokClient({
    oauthToken: process.env.STORYBLOK_TOKEN,
  })

  const path = `spaces/${process.env.STORYBLOK_SPACE_ID}`

   const [stories, assets, assetFolders] = await Promise.all([
    storyblokClient.getAll(`${path}/stories`),
    storyblokClient.getAll(`${path}/assets`),
    storyblokClient.getAll(`${path}/asset_folders`),
  ])

  console.log(`Fetched ${stories.length} stories`)
  console.log(`Fetched ${assets.length} assets`)
  console.log(`Fetched ${assetFolders.length} asset folders`)

  let fullStories = []
  for (let index = 0; index < stories.length; index++) {
    const story = stories[index]
    const fullStory = await storyblokClient.get(`${path}/stories/${story.id}`)
    if (index % 100 === 0) {
      console.log(`Fetched ${index + 1} full stories of ${stories.length}`)
    }
    fullStories.push(fullStory.data.story)
  }
  
  const backup = {
    stories: fullStories,
    assets,
    assetFolders,
  }

  await writeFile('./storyblok-backup.json', JSON.stringify(backup, null, 2))
}

main().catch(console.error)