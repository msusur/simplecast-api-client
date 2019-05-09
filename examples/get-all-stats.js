const SimpleCastClient = require("../src/simplecast-client");

// Usage: node examples/get-all-stats.js API_KEY

const client = new SimpleCastClient({ apikey: process.argv[2] });
let podcastId;
client.podcasts
  .getPodcasts()
  .then(podcasts => {
    console.log(
      `# of Podcasts: ${podcasts.collection.length}.
      Getting the episodes of ${podcasts.collection[0].title} (${
        podcasts.collection[0].id
      })`
    );
    podcastId = podcasts.collection[0].id;
    return client.episodes.getEpisodes(podcastId, { limit: 1000 });
  })
  .then(episodes => {
    console.log(`# of episodes: ${episodes.collection.length}
    Getting the stats for episode ${episodes.collection[3].title}`);
    return client.episodes.getDownloads(episodes.collection[3].id);
  })
  .then(downloads => {
    console.log(`Total downloads: ${downloads.total}`);
  })
  .catch(error => {
    console.log({ response: error.message });
  });
