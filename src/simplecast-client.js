const Episodes = require('../src/episodes'),
  Podcasts = require('../src/podcasts'),
  Statistics = require('../src/statistics');

const rp = require('request-promise');

class SimpleCastClient {
  constructor({ baseUrl, version, apikey }) {
    this.baseUrl = baseUrl || 'https://api.simplecast.com';
    this.version = version || 'v1';
    this.apikey = apikey;
    this.endpoint = `${this.baseUrl}/${this.version}`;

    this.episodes = new Episodes(this);
    this.podcasts = new Podcasts(this);
    this.Statistics = new Statistics(this);
  }

  get(requestUrl) {
    return rp(`${this.endpoint}/${requestUrl}`);
  }
}

module.exports = SimpleCastClient;
