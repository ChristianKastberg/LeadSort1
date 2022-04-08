var Podio = require('podio-js').api;
var express = require('express');

var app = express();

var podio = new Podio({
  authType: 'client', // server,client or password auth - ingen server så det er client eller pw auth 
  clientId: 'leadscompare',
  clientSecret: 'aTTpvVYU8MYcqxtfyCD9SIt9fxNkrgmrq5NjECwCINrI54fRoKdp4TZBfEq7UIhW'
});

app.use(require('podio-js').middleware({
    clientId: 'leadscompare',
    clientSecret: 'aTTpvVYU8MYcqxtfyCD9SIt9fxNkrgmrq5NjECwCINrI54fRoKdp4TZBfEq7UIhW'
  }));