import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { clientConnect, clientDisconnect } from "../network/client";
import {
  handleOnConnectErrorEvent,
  handleOnConnectEvent,
  handleOnDisconnectEvent,
  handleOnPongEvent,
  handleOnServerFullEvent,
} from "../network/events";
import useConnectionStore from "../stores/useConnectionStore";

const useWebSocket = () => {
  const { socket, setPing } = useConnectionStore(useShallow((state) => state));
  useConnectionStore;

  useEffect(() => {
    clientConnect(socket);

    handleOnConnectEvent(socket);
    handleOnConnectErrorEvent(socket);
    handleOnDisconnectEvent(socket);
    handleOnServerFullEvent(socket);
    handleOnPongEvent(socket, setPing);

    return () => {
      clientDisconnect(socket);
    };
  }, []);
};

export default useWebSocket;
