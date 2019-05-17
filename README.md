# Simplecast JS Client

### Getting Started

The client library is now supporting the v2 of the SimpleCast API! 🎉🎊 

I encourge you to checkout the v2 [documentation](https://help.simplecast.com/api-documentation/simplecast-20-api) before start using this API. There some killer breaking changes on how it works.

`npm install` and `npm test`.

### Using the Client

Install the package using `npm`.

```sh
npm i simplecast-api-client --save
```

Then simple get your api key and paste the following code.

```js
const client = new SimpleCastClient({ apikey: "MY API KEY" });
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
```

More documentation to come.
