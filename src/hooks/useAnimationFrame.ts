import { useCallback, useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import useGameStore from "../stores/useGameStore";
import useSettingsStore from "../stores/useSettingsStore";

const useAnimationFrame = () => {
  const [_, setTick] = useState<number>(0);

  const { maxFps } = useSettingsStore(useShallow((state) => state));
  const { setFps, setDeltaTime } = useGameStore(useShallow((state) => state));

  const frameDetails = useRef({
    fps: 0,
    frameCount: 0,
    previousTime: performance.now(),
    lastFpsUpdate: performance.now(),
    frameId: 0,
  });

  const frameInterval = 1000 / maxFps;

  const update = useCallback(
    (deltaTime: number) => {
      setTick((tick) => tick + 1);
      setDeltaTime(deltaTime);
      setFps(frameDetails.current.fps);
    },
    [setTick, setDeltaTime, setFps]
  );

  const animate = useCallback(
    (time: number) => {
      const { previousTime, lastFpsUpdate } = frameDetails.current;
      const deltaTime = time - previousTime;

      if (deltaTime >= frameInterval) {
        frameDetails.current.frameCount += 1;
        update(deltaTime);

        if (time - lastFpsUpdate >= 1000) {
          frameDetails.current.fps = frameDetails.current.frameCount;
          frameDetails.current.frameCount = 0;
          frameDetails.current.lastFpsUpdate = time;
        }

        frameDetails.current.previousTime = time - (deltaTime % frameInterval);
      }

      frameDetails.current.frameId = requestAnimationFrame(animate);
    },
    [frameInterval, update]
  );

  useEffect(() => {
    frameDetails.current.previousTime = performance.now();
    frameDetails.current.frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameDetails.current.frameId);
  }, [animate]);
};

export default useAnimationFrame;
