type AnimatedSceneProps = {
  update: () => void;
  children: React.ReactNode;
};

function AnimatedScene({ update, children }: AnimatedSceneProps) {
  update();

  return <>{children}</>;
}

export default AnimatedScene;
