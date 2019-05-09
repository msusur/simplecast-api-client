const Episodes = require("../src/episodes");
const chai = require("chai"),
  sinon = require("sinon"),
  sinonChai = require("sinon-chai"),
  expect = chai.expect;

chai.should();
chai.use(sinonChai);

describe("Episodes", () => {
  describe("constructor", () => {
    it("should set the client", () => {
      const episodes = new Episodes("i-am-client");
      expect(episodes.client).to.be.equal("i-am-client");
    });
  });

  describe("get episodes", () => {
    let clientMock, episodes;
    beforeEach(() => {
      clientMock = {
        get: sinon.spy()
      };
      episodes = new Episodes(clientMock);
    });

    it("should get all episodes for the podcast from the api", () => {
      episodes.getEpisodes("podcast-id", { limit: 10 });

      expect(
        clientMock.get.calledWith(
          `podcasts/podcast-id/episodes?limit=10&offset=0`
        )
      ).to.be.true;
    });

    it("should get the episode for the podcast from the api", () => {
      episodes.getEpisode("episode-id");

      expect(
        clientMock.get.calledWith(`episodes/episode-id`)
      ).to.be.true;
    });
  });
});
