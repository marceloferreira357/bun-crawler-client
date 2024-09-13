import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { clientConnect, clientDisconnect } from "../network/client";
import {
  handleOnConnectErrorEvent,
  handleOnConnectEvent,
  handleOnDisconnectEvent,
  handleOnPlayerConnectedEvent,
  handleOnPlayerDisconnectedEvent,
  handleOnPlayerMessageSceneEvent,
  handleOnPongEvent,
  handleOnServerFullEvent,
  handleOnUpdateSceneEvent,
} from "../network/events";
import useConnectionStore from "../stores/useConnectionStore";
import useSceneStore from "../stores/useSceneStore";

const useWebSocket = () => {
  const { socket, setPing, setConnectionStatus } = useConnectionStore(
    useShallow((state) => state)
  );
  const { setScene, setPlayers, addPlayerEvent, addPlayerMessage } =
    useSceneStore(useShallow((state) => state));
  useConnectionStore;

  useEffect(() => {
    setTimeout(() => {
      clientConnect(socket);
    }, 1000);

    handleOnConnectEvent(socket, setConnectionStatus);
    handleOnConnectErrorEvent(socket, setConnectionStatus);
    handleOnDisconnectEvent(socket, setConnectionStatus);
    handleOnServerFullEvent(socket, setConnectionStatus);
    handleOnPongEvent(socket, setPing);
    handleOnUpdateSceneEvent(socket, setScene, setPlayers);
    handleOnPlayerConnectedEvent(socket, addPlayerEvent);
    handleOnPlayerDisconnectedEvent(socket, addPlayerEvent);
    handleOnPlayerMessageSceneEvent(socket, addPlayerMessage);

    return () => {
      clientDisconnect(socket);
    };
  }, []);
};

export default useWebSocket;
