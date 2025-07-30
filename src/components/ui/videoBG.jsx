import { cn } from "@/lib/utils";
export function VideoBg({ videoClass }) {
  return (
    <video
      poster={"/images//banner.png"}
      className={cn(`video-size ${videoClass}`)}
      muted
      loop
      autoPlay
      preload="none"
    >
      <source src={"/images/banner.png"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
