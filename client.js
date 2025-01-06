const WebSocket = require('ws');
const readline = require('readline');

const connectToServer = (port = 8080) => {
  const ws = new WebSocket(`ws://localhost:${port}`);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  ws.on('open', () => {
    console.log('Connected to the server.');
    rl.setPrompt('Enter message: ');
    rl.prompt();

    rl.on('line', (line) => {
      ws.send(line);
      rl.prompt();
    });
  });

  ws.on('message', (message) => {
    console.log(`Message from server: ${message}`);
  })

  ws.on('close', () => {
    console.log('Disconnected from server');
    rl.close();
  })

  ws.on('error', (err) => {
    console.log(`Error occurred: ${err.message}`);
    rl.close();
  });
}

module.exports = connectToServer;