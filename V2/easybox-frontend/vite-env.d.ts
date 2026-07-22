/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
  readonly VITE_MAPBOX_TOKEN: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_ENV: 'development' | 'staging' | 'production'
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_LIVE_TRACKING: string
  readonly VITE_ENABLE_AI_DISPATCH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}