import { it, expect } from "vitest";

import { mergeTimestamps } from "./merge-timestamps";

it("should merge timestamps", () => {
  expect(mergeTimestamps()).toBe("yay");
});
