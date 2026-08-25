import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
import '@testing-library/jest-dom/vitest';

const SNAPSHOT_SYSTEM_TIME = new Date('2025-04-21T12:00:00+03:00');

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(SNAPSHOT_SYSTEM_TIME);
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
