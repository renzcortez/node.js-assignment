async function findOnline(servers) {

  const axios = require('axios');

  const result = await Promise.all(servers.map(server =>
    axios.get(server.url, { timeout: 5000 })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.config.url;
      }
    })
    .catch((err) => {
      console.error(err.code + '(' + err.errno + '): ' + err.config.url);
    })
  ));
  return result;

};


function findServer(servers) {

  const lowest = findOnline(servers).then((result) => {
    const online = [];
    for(server in result) {
      online.push(servers.find(element => element.url === result[server]));
    }
    online.sort(function(a, b){return a.priority - b.priority});
    if (online[0] !== undefined) {
      return online[0];
    } else {
      throw 'No servers are online!';
    }
  })
  return lowest;

}


exports.findServer = findServer;
