/// <reference types="vite/client" />

interface ImportMetaEnv {
  
  readonly VITE_VISIT_COUNTER_IMG_SRC?: string

  readonly VITE_VISIT_COUNTER_HREF?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
