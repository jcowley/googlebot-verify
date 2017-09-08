'use strict';

const expect = require('chai').expect;
const verifier = require('../index');

describe('#googlebot-verify', function() {
  it('should pass google.com IP 66.249.66.1', function() {
    verifier('66.249.66.1', (e, result) => {
      expect(result).be.true;
    });    
  });
  
  it('should pass googlebot.com IP 66.249.90.77', function() {
    verifier('66.249.90.77', (e, result) => {
      expect(result).be.true;
    });    
  });

  it('should fail 208.67.222.222', function() {
    verifier('208.67.222.222', (e, result) => {
      expect(result).be.false;
    });    
  });
});