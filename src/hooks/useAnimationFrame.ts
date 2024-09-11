import { useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import useGameStore from "../stores/useGameStore";
import useSettingsStore from "../stores/useSettingsStore";

const useAnimationFrame = () => {
  const { maxFps } = useSettingsStore(useShallow((state) => state));
  const { setDeltaTime, setFps } = useGameStore(useShallow((state) => state));
  const lastFrameTimeRef = useRef(performance.now());
  const frameCountRef = useRef(0);
  const lastFpsUpdateTimeRef = useRef(performance.now());
  const animationFrameIdRef = useRef(0);

  const frameDuration = 1000 / maxFps;

  useEffect(() => {
    let accumulatedTime = 0;

    const update = (currentTime: DOMHighResTimeStamp) => {
      const lastFrameTime = lastFrameTimeRef.current;
      let elapsed = currentTime - lastFrameTime;
      lastFrameTimeRef.current = currentTime;

      accumulatedTime += elapsed;

      while (accumulatedTime >= frameDuration) {
        setDeltaTime(frameDuration);

        frameCountRef.current++;
        if (currentTime - lastFpsUpdateTimeRef.current >= 1000) {
          setFps(frameCountRef.current);
          lastFpsUpdateTimeRef.current = currentTime;
          frameCountRef.current = 0;
        }

        accumulatedTime -= frameDuration;
      }

      animationFrameIdRef.current = requestAnimationFrame(update);
    };

    animationFrameIdRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [setDeltaTime, setFps]);
};

export default useAnimationFrame;
