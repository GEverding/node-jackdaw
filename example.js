
var jd = require('./lib/index');

var dsn = process.env.SENTRY_DSN;
var client = new jd.Client(dsn);

process.on('uncaughtException', function(err){
  client.captureError(err, function(err) {
    console.log(err)
  });
});

(function someFunction(){
  throw new Error('ahh something went wrong');
})();
