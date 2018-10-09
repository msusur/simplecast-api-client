const produceRequestParams = (parameters, url) => {
  let params = [];
  if (!parameters) {
    return url;
  }
  if (parameters.episodeId) {
    params.push(`episode_id=${parameters.episodeId}`);
  }
  if (parameters.timeframe) {
    params.push(`timeframe=${parameters.timeframe}`);
  }
  if (parameters.startDate) {
    params.push(`start_date=${parameters.startDate}`);
  }

  if (parameters.endDate) {
    params.push(`end_date=${parameters.endDate}`);
  }
  url += params.length > 0 ? `?${params.join('&')}` : '';
  return url;
};
class Statistics {
  constructor(client) {
    this.client = client;
  }

  getListenerStats(podcastId) {
    return this.client.get(`podcasts/${podcastId}/statistics.json`);
  }

  getOverallStats(podcastId, { timeframe, startDate, endDate }) {
    let url = `podcasts/${podcastId}/statistics/overall.json`;
    url = produceRequestParams({ timeframe, startDate, endDate }, url);
    return this.client.get(url);
  }

  getEpisodeStats(podcastId, episodeId, { timeframe, startDate, endDate }) {
    let url = `podcasts/${podcastId}/statistics/episode.json`;
    url = produceRequestParams(
      { episodeId, timeframe, startDate, endDate },
      url
    );
    return this.client.get(url);
  }
}
module.exports = Statistics;
