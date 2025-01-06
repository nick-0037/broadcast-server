#!/usr/bin/env node
const startServer = require('./server');
const connectToServer = require('./client');

const args = process.argv.slice(2);

if (args[0] === 'start') {
  const port = args[1] ? parseInt(args[1], 10) : 8080;
  startServer(port);
} else if (args[0] === 'connect') {
  const port = args[1] ? parseInt(args[1], 10) : 8080;
  connectToServer(port);
} else {
  console.log('Usage:');
  console.log(' broadcast-server start [port] - Start the server');
  console.log(' broadcast-server connect [port] - Connect as a client');
}