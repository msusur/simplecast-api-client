Simplecast JS Client
===

### Getting Started

`npm install` and `npm test`.

### Using the Client

Install the package using `npm`.

```sh
npm i simplecast-api-client --save
```

Then simple get your api key and paste the following code.

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

More documentation to come.
