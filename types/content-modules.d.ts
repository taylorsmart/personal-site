declare module '*.md' {
  import type { ComponentType } from 'react'

  const MDComponent: ComponentType<Record<string, unknown>>
  export default MDComponent
}

declare module '*.mdx' {
  import type { ComponentType } from 'react'

  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
