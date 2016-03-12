var express = require("express")
var app = express()

app.get('/', function(req,res){
  
  var head = req.headers,
      ip = head["x-forwarded-for"],
      lang = head["accept-language"]
            .split(',')[0],
      ua = head["user-agent"]
            .match(/\(([^\)]+)\)/)[1]
  console.log(head)
  res.json({
    "ipaddress": ip, "language": lang, "software": ua
  }).end()
})

app.listen(process.env.PORT)