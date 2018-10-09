class Episodes {
  constructor(client) {
    this.client = client;
  }

  getEpisodes(podcastId) {
    return this.client.get(`/podcasts/${podcastId}/episodes.json`);
  }

  getEpisode(podcastId, episodeId) {
    return this.client.get(`/podcasts/${podcastId}/episodes/${episodeId}.json`);
  }
}
module.exports = Episodes;
