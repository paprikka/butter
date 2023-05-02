import { SponsoredTimestamp } from "./detector";

export const createPlayerControl = (
  el: HTMLVideoElement,
  timestamps: SponsoredTimestamp[],
  onSponsoredTimestampEnter: (segment: SponsoredTimestamp) => void
) => {
  if (!timestamps.length) return () => {};

  const interval = setInterval(() => {
    const currentTime = el.currentTime;

    const currentTimestamp = timestamps.find(({ startSeconds, endSeconds }) => {
      return currentTime >= startSeconds && currentTime <= endSeconds;
    });

    if (currentTimestamp) {
      onSponsoredTimestampEnter(currentTimestamp);
      el.currentTime = currentTimestamp.endSeconds;
    }
  }, 1000);

  return () => clearInterval(interval);
};
