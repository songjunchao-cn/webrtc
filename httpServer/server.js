/*
 * @Author: sjc
 * @Date: 2020-02-23 16:55:21
 * @LastEditTime: 2020-02-23 18:37:29
 * @Description: sample server
 */
'use strict'
var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hello webrtc')
}).listen(8080,'localhost')
