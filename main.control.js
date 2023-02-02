const http = require('http');
const x68747470 = require('\x68\x74\x74\x70');
const x736572766572 = x68747470.createServer((s,r)=>{r.end('foo')});
x736572766572.listen(8080,'localhost');