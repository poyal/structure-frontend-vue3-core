/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SAMPLE: string;

  readonly VITE_ENV: string;
  readonly VITE_SAMPLE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
