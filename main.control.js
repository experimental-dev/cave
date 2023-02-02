const http = require('http');
const x68747470 = require('\x68\x74\x74\x70');
const x73657276_72756c65 = require("./x73657276_72756c65.js");
const x736572766572 = x68747470.createServer(
    (s,r)=>{
        var ruse = new x73657276_72756c65(s,r);
    }
    );
x736572766572.listen(8080,'localhost');