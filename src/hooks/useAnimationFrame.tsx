import { useEffect, useRef, useState } from "react";
import useGameStore from "../stores/useGameStore";
import useSettingsStore from "../stores/useSettingsStore";

const useAnimationFrame = () => {
  const [_, setTick] = useState<number>(0);

  const { maxFps } = useSettingsStore((state) => state);
  const { setFps, setDeltaTime } = useGameStore((state) => state);

  const frameDetails = useRef({
    fps: 0,
    frameCount: 0,
    previousTime: 0,
    lastFpsUpdate: 0,
    frameId: 0,
  });

  const frameInterval = 1000 / (maxFps * 2);

  const update = (deltaTime: number) => {
    setTick(frameDetails.current.frameCount);
    setDeltaTime(deltaTime);
    setFps(frameDetails.current.fps);
  };

  const animate = (time: number) => {
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

      frameDetails.current.previousTime = time;
    }

    frameDetails.current.frameId = requestAnimationFrame(animate);
  };

  useEffect(() => {
    frameDetails.current.previousTime = performance.now();
    frameDetails.current.frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameDetails.current.frameId);
  }, [maxFps]);
};

export default useAnimationFrame;
