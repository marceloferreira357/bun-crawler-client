import { Howl, HowlOptions } from "howler";
import { useRef } from "react";

type AudioProps = { src: URL } & Omit<HowlOptions, "src">;

const useAudio = ({
  src,
  volume,
  html5,
  loop,
  preload,
  autoplay,
  mute,
  sprite,
  rate,
  pool,
  format,
  xhr,
}: AudioProps) => {
  const audio = useRef(
    new Howl({
      src: src.href,
      volume,
      html5,
      loop,
      preload,
      autoplay,
      mute,
      sprite,
      rate,
      pool,
      format,
      xhr,
    })
  );

  return audio.current;
};

export default useAudio;
