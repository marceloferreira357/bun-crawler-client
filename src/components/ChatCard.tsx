import React, { useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { zIndex } from "../common/constants";
import { Events } from "../common/types";
import { clientEmit } from "../network/client";
import useConnectionStore from "../stores/useConnectionStore";
import useSceneStore from "../stores/useSceneStore";
import Input from "./Input/Input";
import Text from "./Text";

function ChatCard() {
  const { socket } = useConnectionStore(useShallow((state) => state));
  const { scene } = useSceneStore(useShallow((state) => state));
  const { playerMessages } = useSceneStore(useShallow((state) => state));

  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnChange = (value: string) => {
    if (value) {
      clientEmit(socket, Events.PLAYER_MESSAGE, [value]);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [playerMessages]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 24,
        right: 8,
        display: "flex",
        flexDirection: "column",
        zIndex: zIndex.chatCard,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "450px",
          height: "300px",
          maxHeight: "300px",
          overflowY: "auto",
          marginBottom: "8px",
          padding: "8px",
          gap: "8px",
        }}
      >
        <Text fontSize="1.2rem" color="#00A6FF">
          You're connected to {scene} room
        </Text>
        {playerMessages.map((playerMessage) => (
          <Text key={playerMessage.id} fontSize="1.2rem">
            {playerMessage.socketId}: {playerMessage.message}
          </Text>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <Input
          backgroundColor="rgba(255, 255, 255, 0.1)"
          fontSize="1.2rem"
          placeholder="Type a message..."
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default React.memo(ChatCard);
