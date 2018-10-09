const Episodes = require('../src/episodes'),
  Podcasts = require('../src/podcasts'),
  Statistics = require('../src/statistics');

const rp = require('request-promise'),
  Url = require('url');

const addAuthentication = (baseUrl, apikey) => {
  var url = Url.parse(`${baseUrl}`);
  return `${url.protocol}//${apikey}:@${url.hostname}${url.path}`;
};

class SimpleCastClient {
  constructor({ baseUrl, version, apikey }) {
    this.baseUrl = baseUrl || 'https://api.simplecast.com';
    this.version = version || 'v1';
    this.apikey = apikey;
    this.endpoint = addAuthentication(
      `${this.baseUrl}/${this.version}`,
      apikey
    );

    this.episodes = new Episodes(this);
    this.podcasts = new Podcasts(this);
    this.statistics = new Statistics(this);
  }

  get(requestUrl) {
    return rp(`${this.endpoint}/${requestUrl}`, {
      json: true
    });
  }
}

module.exports = SimpleCastClient;
