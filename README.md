# Bun Crawler Client

This project is the front-end client for the [Bun Crawler Server](https://github.com/marceloferreira357/bun-crawler-server). It provides a user interface for the multiplayer game, handling rendering and user input while the server manages the core game logic.

## Prerequisites

To run this project, you need:

- [Bun](https://bun.sh/)
- [Vite](https://vitejs.dev/)

## Environment Setup

Create a `.env` file in the root directory of the project. You can use the `.env.example` file as a template:

```
VITE_SERVER_ADDRESS=http://127.0.0.1:4000
VITE_PUBLIC_ADDRESS=http://127.0.0.1:3000
```

Make sure to adjust these values according to your setup.

## Running the Project

1. Install dependencies:

   ```
   bun install
   ```

2. Start the development server:
   ```
   bun run dev
   ```

The game client will run at 60 FPS, providing a smooth user experience.

## Game Architecture

The Bun Crawler Client establishes a WebSocket connection with the server to share the game state among all connected clients. The server handles all game logic, while the client focuses on rendering and sending user inputs.

### WebSocket Events

The client uses the following WebSocket events to communicate with the server:

```typescript
export enum Events {
  CONNECT = "connect",
  CONNECT_ERROR = "connect_error",
  DISCONNECT = "disconnect",
  SERVER_FULL = "server_full",
  PONG = "pong",
  UPDATE_SCENE = "update_scene",
  PLAYER_CONNECTED = "player_connected",
  PLAYER_DISCONNECTED = "player_disconnected",
  PLAYER_MOVEMENT = "player_movement",
  PING = "ping",
}
```

- `CONNECT`: Fired when the client successfully connects to the server.
- `CONNECT_ERROR`: Occurs if there's an error during connection.
- `DISCONNECT`: Triggered when the client disconnects from the server.
- `SERVER_FULL`: Sent by the server if it has reached its maximum capacity.
- `PONG`: Response to a ping event, used for latency calculation.
- `UPDATE_SCENE`: Received when the server sends updated game state.
- `PLAYER_CONNECTED`: Fired when a new player joins the game.
- `PLAYER_DISCONNECTED`: Occurs when a player leaves the game.
- `PLAYER_MOVEMENT`: Sent by the client to update player movement.
- `PING`: Sent periodically to measure latency.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
