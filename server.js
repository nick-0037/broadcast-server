const WebSocket = require('ws');

const startServer = (port = 8080) => {
  const wss = new WebSocket.Server({ port });
  const clients = new Set();

  console.log(`Server started on port ${port}`);

  wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    ws.on('message', (message) => {
      console.log(`Received: ${message}`);
      for (const client of clients) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected.');
      clients.delete(ws);
    });
  });

  wss.on('error', (err) => {
    console.error(`Server error: ${err.message}`);
  });
}

module.exports = startServer;