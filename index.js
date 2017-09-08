'use strict';
const dns = require('dns');
const url = require('url');

module.exports = (ip, callback) => {
  callback = callback || function () {}

  return new Promise(function (resolve, reject) {

    dns.reverse(ip, (error, hosts) => {
      if (error) {
        reject(error);
        return callback(error);
      }

      const tld = hosts[0] && hosts[0].split('.').slice(-2, -1)[0];
      if (tld !== "google" && tld !== "googlebot") {
        resolve(false);
        return callback(null, false);
      }

      dns.lookup(hosts[0], (error, address) => {
        const match = address === ip;
        resolve(match);
        return callback(error, match);
      });
    });
  });
}