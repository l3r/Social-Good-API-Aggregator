var cls = require('./sparked');

var sparked = new cls('http://api.sparked.com/feeds/openchallenges.xml');
//console.log('[');
sparked.on('eventDone', function(data) {
//  console.log(data);
  console.log(sparked.adapter(data));
  //throw new Error();
});
sparked.on('end', function () {
//  console.log(']');
});
sparked.parse();
