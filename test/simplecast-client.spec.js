const SimplecastClient = require('../src/simplecast-client');
const chai = require('chai'),
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
  });
});
