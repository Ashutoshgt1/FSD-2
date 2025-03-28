// http://video.google.co.uk:80/videoplay?docid=-7207830&h1=en#ooho2305
var url =require('url');
var addr="http://video.google.co.uk:80/videoplay?docid=-7207830&h1=en#ooho2305";
var q = url.parse(addr,false);   
// if false then query id is in string and if true then query id is in object
console.log(q)