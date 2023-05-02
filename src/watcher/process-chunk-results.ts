import {
  ChunkResult,
  ChunkSponsoredFoundResult,
  SponsoredTimestamp,
} from "./detector";

export const processChunkResults = (
  results: ChunkResult[],
  minLength: number = 1,
  minDistance: number = 0
) => {
  const isFound = (
    chunkResult: ChunkResult
  ): chunkResult is ChunkSponsoredFoundResult => chunkResult.isSponsoredFound;

  const isLongEnough = (chunkResult: SponsoredTimestamp) => {
    const duration = chunkResult.endSeconds - chunkResult.startSeconds;
    return duration >= minLength;
  };

  const mergeCloseChunks = (
    timestamps: SponsoredTimestamp[],
    chunkResult: ChunkSponsoredFoundResult
  ) => {
    const lastTimestamp = timestamps[timestamps.length - 1];
    if (!lastTimestamp) {
      return [
        {
          startSeconds: chunkResult.startSeconds,
          endSeconds: chunkResult.endSeconds,
        },
      ];
    }
    const distance = chunkResult.startSeconds - lastTimestamp.endSeconds;
    if (distance <= minDistance) {
      const mergedTimestamp: SponsoredTimestamp = {
        startSeconds: lastTimestamp.startSeconds,
        endSeconds: chunkResult.endSeconds,
      };

      return [...timestamps.slice(0, timestamps.length - 1), mergedTimestamp];
    }

    return [
      ...timestamps,
      {
        startSeconds: chunkResult.startSeconds,
        endSeconds: chunkResult.endSeconds,
      },
    ];
  };
  // TODO: merge overlapping/close chunks
  const sponsoredTimestamps = results
    .filter(isFound)
    .reduce(mergeCloseChunks, [])
    .filter(isLongEnough)
    .map((result) => {
      return {
        startSeconds: result.startSeconds,
        endSeconds: result.endSeconds,
      };
    });

  return sponsoredTimestamps;
};
