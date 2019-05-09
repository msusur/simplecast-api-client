const Episodes = require("../src/episodes"),
  Podcasts = require("../src/podcasts");

const rp = require("request-promise"),
  Url = require("url");

class SimpleCastClient {
  constructor({ baseUrl, version, apikey }) {
    this.endpoint = baseUrl || "https://api.simplecast.com";
    this.version = version || "v2";
    this.apikey = apikey;

    this.episodes = new Episodes(this);
    this.podcasts = new Podcasts(this);
  }

  get(requestUrl) {
    return rp(`${this.endpoint}/${requestUrl}`, {
      json: true,
      headers: {
        authorization: `Bearer ${this.apikey}`
      }
    });
  }
}

module.exports = SimpleCastClient;
