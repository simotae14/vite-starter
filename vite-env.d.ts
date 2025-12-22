/// <reference types="vite/client" />

type Vitest = typeof import('vitest');

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_CLOUD_TARGET: string;
  readonly VITE_DB_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly vitest: Vitest;
}
