class Podcasts {
  constructor(client) {
    this.client = client;
  }

  getPodcasts() {
    return this.client.get("podcasts");
  }

  getPodcast(podcastId) {
    return this.client.get(`podcasts/${podcastId}`);
  }

  getTimeOfWeekAnalytics(podcastId) {
    return this.client.get(`analytics/time_of_week?podcast=${podcastId}`);
  }

  getTechnologiesAnalytics(podcastId) {
    return this.client.get(`analytics/technology?podcast=${podcastId}`);
  }

  getRecastsAnalytics(podcastId) {
    return this.client.get(`analytics/recast?podcast=${podcastId}`);
  }

  getMapboxAnalytics(podcastId) {
    return this.client.get(`analytics/mapbox?podcast=${podcastId}`);
  }

  getLocationsAnalytics(podcastId) {
    return this.client.get(`analytics/location?podcast=${podcastId}`);
  }

  getAllEpisodesAnalytics(podcastId) {
    return this.client.get(`analytics/episodes?podcast=${podcastId}`);
  }

  getAllEmbedsAnalytics(podcastId) {
    return this.client.get(`analytics/embed?podcast=${podcastId}`);
  }

  getAllDownloadsAnalytics(podcastId) {
    return this.client.get(`analytics/downloads?podcast=${podcastId}`);
  }
}

module.exports = Podcasts;
