import type { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }: { children: ReactNode }) => (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          {children}
        </div>
      </div>
    ),
    h1: ({ children }) => (
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-center">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 text-3xl font-semibold tracking-tight text-center">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 text-2xl font-semibold tracking-tight text-center">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-lg leading-7 text-muted-foreground text-center">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 mx-auto list-disc space-y-2 text-center max-w-md inline-block">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 mx-auto list-decimal space-y-2 text-center max-w-md inline-block">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-7 text-muted-foreground text-left">{children}</li>
    ),
    ...components,
  };
}

