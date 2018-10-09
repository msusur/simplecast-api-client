const SimplecastClient = require('../src/simplecast-client');
const chai = require('chai'),
  sinon = require('sinon'),
  proxyquire = require('proxyquire').noCallThru(),
  expect = chai.expect;

describe('Simplecast Client', () => {
  describe('constructor', () => {
    it('should construct the class using defaults', () => {
      const simplecast = new SimplecastClient({ apikey: 'test' });
      expect(simplecast.apikey).to.be.equal('test');
      expect(simplecast.baseUrl).to.be.equal('https://api.simplecast.com');
      expect(simplecast.version).to.be.equal('v1');
    });

    it('should override the default if provided', () => {
      const simplecast = new SimplecastClient({
        apikey: 'test',
        baseUrl: 'https://test',
        version: 'v10'
      });
      expect(simplecast.apikey).to.be.equal('test');
      expect(simplecast.baseUrl).to.be.equal('https://test');
      expect(simplecast.version).to.be.equal('v10');
    });

    it('should construct the right endpoint url', () => {
      const simplecast = new SimplecastClient({ apikey: 'test' });
      expect(simplecast.endpoint).to.be.equal('https://api.simplecast.com/v1');
    });

    describe('sub properties', () => {
      it('should construct episodes property', () => {
        const simplecast = new SimplecastClient({ apikey: 'test' });
        expect(simplecast).to.have.property('episodes');
      });

      it('should construct podcasts property', () => {
        const simplecast = new SimplecastClient({ apikey: 'test' });
        expect(simplecast).to.have.property('podcasts');
      });

      it('should construct statistics property', () => {
        const simplecast = new SimplecastClient({ apikey: 'test' });
        expect(simplecast).to.have.property('statistics');
      });
    });
  });

  describe('get', () => {
    it('should call rp with the url and endpoint', () => {
      const promise = sinon.stub().returns('response-from-api');
      const MockedClient = proxyquire('../src/simplecast-client', {
        'request-promise': promise
      });
      const client = new MockedClient({ apikey: 'api-key' });
      const response = client.get('test');
      expect(promise.calledWith('https://api.simplecast.com/v1/test')).to.be
        .true;
      expect(response).to.be.equal('response-from-api');
    });
  });
});
