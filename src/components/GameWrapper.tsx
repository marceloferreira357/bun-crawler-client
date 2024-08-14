type GameWrapperProps = {
  children: React.ReactNode;
};

function GameWrapper({ children }: GameWrapperProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100dvw",
        height: "100dvh",
      }}
    >
      {children}
    </div>
  );
}

export default GameWrapper;
