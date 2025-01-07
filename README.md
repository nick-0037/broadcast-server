# Broadcast server

A CLI-based WebSocket application that enables real-time communication between clients and a server. This project demonstrates how WebSocket connections work to broadcast messages between multiple clients.
https://roadmap.sh/projects/broadcast-server

## Features 

- Start a WebSocket server to handle client connections.
- Connect clients to the server using a CLI.
- Broadcast messages send by one client to all other connected clients.
- Handle multiple client connections gracefully.
- Notify clients when they connect or disconnect.

## Installation 

1. Clone the repository:
  ```bash
  git clone https://github.com/nick-0037/broadcast-server.git
  cd broadcast-server
  ```
2. Install dependecies:
  ```bash
  npm install
  ```

3. Link the CLI tool for grobal usage:
  ```bash
  npm link
  ```

## Usage 

**Start the server**
To start the WebSocket server:
```bash
broadcast-server start
```
The server will listen on the default port 8080. You can specify a custom port with the port option:
```bash
broadcast-server start <port-number>
```

**Connect as a client**
To connect a client to the server:
```bash
broadcast-server connect
```
Once connected, you can start sending messages. Messages sent by one client are broadcast to all other connected clients.

**Example Interaction**
1. Start the server:
  ```bash
  broadcast-server start
  ```

2. Connect client 1:
  ```bash
  broadcast-server connect
  ```
  Output:
  ```bash
  Connected to the server.
  Enter message: Hello!
  ```
3. Connect client 2:
  ```bash
  broadcast-server connect
  ```
  Output:
  ```bash
  Connected to the server.
  Enter message:
  Message from server: Hello!
  ```

## Scripts

- Start the server:
  ```bash
  broadcast-server start
  ```

- Connect as a client:
  ```bash
  broadcast-server connect
  ```

## Technical Details

- WebSocket Library: Uses the `ws` library for WebSocket conmmunication.
- CLI Interaction: Utilizes `node:readline` for user input/output.
- Global CLI tool: Configured in `package.json` using the `bin` field.

## Possible Improvements

- Add authentication for clients.
- Implement message history.
- Enable private messaging between clients.
- Support reconnection for disconnected clients.
