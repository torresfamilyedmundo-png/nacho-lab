/// <reference types="next-auth" />

interface ImportMetaEnv {
  readonly NEXTAUTH_SECRET: string
  readonly NEXTAUTH_URL: string
  readonly DATABASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
