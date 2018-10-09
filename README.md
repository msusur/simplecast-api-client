# Simplecast JS Client

### Getting Started

`npm install` and `npm test`.

### Using the Client

```js
const client = new SimpleCastClient({ apikey: 'MY API KEY' });
client.podcasts
  .getPodcasts()
  .then(podcasts => client.episodes.getEpisodes(podcasts[0].id))
  .then(episodes =>
    client.statistics.getEpisodeStats(podcastId, episodes[13].id, {})
  )
  .then(stats => {
    console.log(`Total listens: ${stats.total_listens}`);
  })
  .catch(error => {
    console.log({ response: error.message });
  });
```
