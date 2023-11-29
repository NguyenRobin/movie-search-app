import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../src/mocks/server';
server;
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => cleanup());

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
