//Axios is a promise-based HTTP Client for node.js and the browser
const axios = require('axios');

//Determine the availability of a given list of servers
async function availableServers(servers) {
  //HTTP GET Request to all Servers simultaneously and wait for all responses
  const result = await Promise.all(servers.map(server =>
    axios.get(server.url, { timeout: 5000 })
    .then((response) => {
      //Consider responses in the 200-299 range as online, everything else as offline
      if (response.status >= 200 && response.status < 300) {
        //Online
        return response.config.url;
      }
    })
    .catch((err) => {
      //Offline
      console.error(err.code + '(' + err.errno + '): ' + err.config.url);
    })
  ));
  return result;
};

//Return an available server with the lowest priority number
function findServer(servers) {
  const lowest = availableServers(servers).then((result) => {
    const online = [];
    for(server in result) {
      //Remove offline servers which are undefined
      if (result[server]) {
        //Map every online server url to its priority
        online.push(servers.find(element => element.url === result[server]));
      }
    }
    //Not all servers are offline
    if (online.length !== 0) {
      //Sort online servers based on priority
      online.sort(function(a, b){return a.priority - b.priority});
      //Resolve Promise with lowest priority online server
      return online[0];
    //All servers are offline
    } else {
      //Reject promise
      throw 'No servers are online!';
    }
  })
  return lowest;
}

exports.findServer = findServer;
