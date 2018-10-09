class Podcasts {
  constructor(client) {
    this.client = client;
  }

  getPodcasts() {
    return this.client.get('/podcasts.json');
  }

  getPodcast(podcastId) {
    return this.client.get(`/podcasts/${podcastId}.json`);
  }
}

module.exports = Podcasts;
