import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { expect, afterEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import type { ReactNode } from 'react';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost:3000',
  pretendToBeVisual: true,
  resources: 'usable'
});

// Create a proper window object with all required properties
global.window = dom.window as any;
global.document = window.document;
global.navigator = window.navigator;

// Mock fetch API
global.fetch = vi.fn();
global.Headers = vi.fn();
global.Request = vi.fn();
global.Response = vi.fn(() => ({
  json: () => Promise.resolve({}),
  text: () => Promise.resolve(""),
  blob: () => Promise.resolve(new Blob()),
  arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
  formData: () => Promise.resolve(new FormData()),
  headers: new Headers(),
  ok: true,
  redirected: false,
  status: 200,
  statusText: "OK",
  type: "default",
  url: "",
  clone: () => new Response(),
})) as any;

// Create a wrapper with providers for testing
export const renderWithProviders = (ui: ReactNode) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

// Cleanup after each test case
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});