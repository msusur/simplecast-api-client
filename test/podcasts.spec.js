const Podcasts = require('../src/podcasts');
const chai = require('chai'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  expect = chai.expect;

chai.should();
chai.use(sinonChai);

describe('Podcasts', () => {
  describe('constructor', () => {
    it('should set the client', () => {
      const podcasts = new Podcasts('i-am-client');
      expect(podcasts.client).to.be.equal('i-am-client');
    });
  });

  describe('get podcasts', () => {
    let clientMock, podcasts;
    beforeEach(() => {
      clientMock = {
        get: sinon.spy()
      };
      podcasts = new Podcasts(clientMock);
    });

    it('should get all podcasts from the api', () => {
      podcasts.getPodcasts();

      expect(clientMock.get.calledWith('podcasts.json')).to.be.true;
    });

    it('should get a podcast from the api', () => {
      podcasts.getPodcast('number123');

      expect(clientMock.get.calledWith('podcasts/number123.json')).to.be.true;
    });
  });
});
