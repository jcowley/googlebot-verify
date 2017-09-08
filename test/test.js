'use strict';

const expect = require('chai').expect;
const verifier = require('../index');

describe('#googlebot-verify', function() {
  it('should pass google.com IP 66.249.66.1', function(done) {
    verifier('66.249.66.1', (e, result) => {
      expect(result).be.true;
      done();
    });    
  });

  it('should pass googlebot.com IP 66.249.90.77', function(done) {
    verifier('66.249.90.77', (e, result) => {
      expect(result).be.true;
      done();
    });    
  });

  it('should fail 208.67.222.222', function(done) {
    verifier('208.67.222.222', (e, result) => {
      expect(result).be.false;
      done();
    });    
  });

  it('should error on 0.0.0.0', function(done) {
    verifier('0.0.0.0').catch( e => {
      expect(e).to.not.be.null;
      done(); 
    });   
  });
});