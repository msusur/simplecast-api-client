const Statistics = require('../src/statistics');
const chai = require('chai'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  expect = chai.expect;

chai.should();
chai.use(sinonChai);

describe('Statistics', () => {
  describe('constructor', () => {
    it('should set the client', () => {
      const statistics = new Statistics('i-am-client');
      expect(statistics.client).to.be.equal('i-am-client');
    });
  });

  describe('get statistics', () => {
    let clientMock, statistics;
    beforeEach(() => {
      clientMock = {
        get: sinon.spy()
      };
      statistics = new Statistics(clientMock);
    });

    it('should get listener stats for the podcast from the api', () => {
      statistics.getListenerStats('podcast-id');

      expect(clientMock.get.calledWith(`podcasts/podcast-id/statistics.json`))
        .to.be.true;
    });

    describe('overall stats', () => {
      it('should get overall stats for the podcast without params from the api', () => {
        statistics.getOverallStats('podcast-id', {});

        expect(
          clientMock.get.calledWith(
            `podcasts/podcast-id/statistics/overall.json`
          )
        ).to.be.true;
      });

      it('should get overall stats with params for the podcast from the api', () => {
        statistics.getOverallStats('podcast-id', {
          timeframe: 'test',
          startDate: '1980-12-12',
          endDate: '1999-12-12'
        });

        expect(
          clientMock.get.calledWith(
            'podcasts/podcast-id/statistics/overall.json?' +
              'timeframe=test&start_date=1980-12-12&end_date=1999-12-12'
          )
        ).to.be.true;
      });
    });

    describe('episode stats', () => {
      it('should get episode stats without params from the api', () => {
        statistics.getEpisodeStats('podcast-id', '1234', {});
        expect(
          clientMock.get.calledWith(
            `podcasts/podcast-id/statistics/episode.json?episode_id=1234`
          )
        ).to.be.true;
      });

      it('should get episode stats with params from the api', () => {
        statistics.getEpisodeStats('podcast-id', '1234', {
          timeframe: 'test',
          startDate: '1980-12-12',
          endDate: '1999-12-12'
        });
        expect(
          clientMock.get.calledWith(
            `podcasts/podcast-id/statistics/episode.json?episode_id=1234` +
              '&timeframe=test&start_date=1980-12-12&end_date=1999-12-12'
          )
        ).to.be.true;
      });
    });
  });
});
