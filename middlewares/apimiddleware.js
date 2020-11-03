export default function(req, res, next){
  let ip = req.ip|| req.connection.remoteAddress||req.connection.socket.remoteAddress;
  let ip_reg = ip.match(/[0-9].?/g).join('')

  if(ip_reg !== "76.76.21.21"){
    res.send('not found');
  }
  else{
  	next();
  }
}