import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
import '@testing-library/jest-dom/vitest';
afterEach(cleanup);
