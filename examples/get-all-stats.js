const SimpleCastClient = require('../src/simplecast-client');

const client = new SimpleCastClient({ apikey: process.argv[2] });
client.podcasts
  .getPodcasts()
  .then(podcasts => {
    console.log(
      `# of Podcasts: ${podcasts.length}.
      Getting the episodes of ${podcasts[0].title}`
    );
    return client.episodes.getEpisodes(podcasts[0].id);
  })
  .catch(error => {
    console.log({ response: error.message });
  });
