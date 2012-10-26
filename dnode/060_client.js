var net = require('net');
var dnode = require('dnode');

var stream = net.connect(8000);
var d = dnode();
d.on('remote', function (remote) {
    remote.louder('beep boop', function (s) {
        console.log(s);
    });
});
