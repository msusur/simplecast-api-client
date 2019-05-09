class Episodes {
  constructor(client) {
    this.client = client;
  }

  getEpisodes(podcastId, { limit = 10, offset = 0 }) {
    return this.client.get(
      `podcasts/${podcastId}/episodes?limit=${limit}&offset=${offset}`
    );
  }

  getEpisode(episodeId) {
    return this.client.get(`episodes/${episodeId}`);
  }

  getDownloads(episodeId) {
    return this.client.get(`analytics/downloads?episode=${episodeId}`);
  }

  getTechnologies(episodeId) {
    return this.client.get(`analytics/technology?episode=${episodeId}`);
  }

  getMapbox(episodeId) {
    return this.client.get(`analytics/mapbox?episode=${episodeId}`);
  }

  getLocations(episodeId) {
    return this.client.get(`analytics/location?episode=${episodeId}`);
  }

  getEmbed(episodeId) {
    return this.client.get(`analytics/embed?episode=${episodeId}`);
  }
}
module.exports = Episodes;
