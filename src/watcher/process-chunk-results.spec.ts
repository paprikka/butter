import { it, expect, vi } from "vitest";
import { processChunkResults } from "./process-chunk-results";
import { ChunkResult } from "./detector";

vi.mock("../log");

it("should only return chunks with founs sponsored messages", () => {
  const input: ChunkResult[] = [
    { isSponsoredFound: false, index: 0 },
    { isSponsoredFound: true, index: 1, startSeconds: 0, endSeconds: 10 },
    { isSponsoredFound: false, index: 2 },
    { isSponsoredFound: true, index: 3, startSeconds: 10, endSeconds: 20 },
  ];

  expect(processChunkResults(input, 7, -1)).toEqual([
    { startSeconds: 0, endSeconds: 10 },
    { startSeconds: 10, endSeconds: 20 },
  ]);
});

it("should remove short chunks", () => {
  const input: ChunkResult[] = [
    { isSponsoredFound: true, index: 0, startSeconds: 0, endSeconds: 1 },
    { isSponsoredFound: true, index: 1, startSeconds: 1, endSeconds: 10 },
    { isSponsoredFound: true, index: 2, startSeconds: 20, endSeconds: 26 },
    { isSponsoredFound: true, index: 3, startSeconds: 30, endSeconds: 31 },
    { isSponsoredFound: true, index: 4, startSeconds: 31, endSeconds: 37 },
  ];

  expect(processChunkResults(input, 5, -1)).toEqual([
    { startSeconds: 1, endSeconds: 10 },
    { startSeconds: 20, endSeconds: 26 },
    { startSeconds: 31, endSeconds: 37 },
  ]);
});

it("should merge close chunks", () => {
  const input: ChunkResult[] = [
    { isSponsoredFound: true, index: 0, startSeconds: 0, endSeconds: 10 },
    { isSponsoredFound: true, index: 1, startSeconds: 13, endSeconds: 20 },
    { isSponsoredFound: true, index: 2, startSeconds: 25, endSeconds: 26 },
    { isSponsoredFound: false, index: 3 },
    { isSponsoredFound: true, index: 4, startSeconds: 30, endSeconds: 33 },
    { isSponsoredFound: true, index: 5, startSeconds: 35, endSeconds: 40 },
  ];

  expect(processChunkResults(input, 5, 3)).toEqual([
    { startSeconds: 0, endSeconds: 20 },
    { startSeconds: 30, endSeconds: 40 },
  ]);
});
