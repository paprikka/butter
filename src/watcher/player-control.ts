import { SponsoredTimestamp } from "./detector";

export const createPlayerControl = (
  el: HTMLVideoElement,
  timestamps: SponsoredTimestamp[],
  onSponsoredTimestampEnter: (segment: SponsoredTimestamp) => void
) => {
  if (!timestamps.length) return () => {};
  let previousTimestamp: SponsoredTimestamp | null = null;

  const interval = setInterval(() => {
    const currentTime = el.currentTime;

    const currentTimestamp = timestamps.find(({ startSeconds, endSeconds }) => {
      return currentTime >= startSeconds && currentTime <= endSeconds;
    });

    if (currentTimestamp && previousTimestamp !== currentTimestamp) {
      previousTimestamp = currentTimestamp;
      onSponsoredTimestampEnter(currentTimestamp);
      el.currentTime = currentTimestamp.endSeconds;
    }

    if (!currentTimestamp && previousTimestamp) {
      previousTimestamp = null;
    }
  }, 500);

  return () => clearInterval(interval);
};
