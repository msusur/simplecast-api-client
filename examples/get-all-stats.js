const SimpleCastClient = require('../src/simplecast-client');

// Usage: node examples/get-all-stats.js API_KEY

const client = new SimpleCastClient({ apikey: process.argv[2] });
let podcastId;
client.podcasts
  .getPodcasts()
  .then(podcasts => {
    console.log(
      `# of Podcasts: ${podcasts.length}.
      Getting the episodes of ${podcasts[0].title}`
    );
    podcastId = podcasts[0].id;
    return client.episodes.getEpisodes(podcastId);
  })
  .then(episodes => {
    console.log(`# of episodes: ${episodes.length}
    Getting the stats for episode ${episodes[13].title}`);
    return client.statistics.getEpisodeStats(podcastId, episodes[13].id, {});
  })
  .then(stats => {
    console.log(`Total listens: ${stats.total_listens}`);
  })
  .catch(error => {
    console.log({ response: error.message });
  });
