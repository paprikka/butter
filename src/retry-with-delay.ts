import { log } from "./log";
import { wait } from "./wait";

export const retryPromiseWithDelay = async <T>(
  promise: () => Promise<T>,
  delay: number,
  retries = 3,
  onError?: (error: any) => void
): Promise<T> => {
  try {
    return await promise();
  } catch (error) {
    if (retries === 0) throw error;
    await wait(delay);
    if (onError) onError(error);

    log(`Retrying ${retries} more times...`);
    return await retryPromiseWithDelay(promise, delay, retries - 1);
  }
};
