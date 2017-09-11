# googlebot-verify
[![Build Status](https://travis-ci.org/jcowley/googlebot-verify.svg?branch=master)](https://travis-ci.org/jcowley/googlebot-verify)
[![Coverage Status](https://coveralls.io/repos/github/jcowley/googlebot-verify/badge.svg?branch=master)](https://coveralls.io/github/jcowley/googlebot-verify?branch=master)
## Synopsis

Verify that an IP address is from Google using Google's recommended DNS verification steps.

## Motivation

You may wish to verify that a web crawler accessing your server is Googlebot (or another Google user-agent) and not spammers or other bots scraping your site while claiming to be Googlebot. Since you cannot rely on the `User-Agent` header which is easily spoofed, you need to use DNS look up to verify that the IP address belongs to Google. 

This library implements Google's own verification steps outlined here: https://support.google.com/webmasters/answer/80553?hl=en

## Installation

`npm install googlebot-verify`

## Code Examples

### Using a callback

```javascript
  const verify = require('googlebot-verify');
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  verify(ip, (error, isGoogle) => {
    if (isGoogle) {
      // do something with result...
    }
  });
```

### Using a Promise
```javascript
  verify(ip)
  .then( isGoogle => { /* handle result */ })
  .catch( e => { /* handle error */ });
```

## Tests

`npm test`

## License

[MIT](https://github.com/pillarjs/parseurl/blob/master/LICENSE)