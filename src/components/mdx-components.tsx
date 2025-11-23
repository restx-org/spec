import type { MDXComponents } from 'mdx/types'

// RFC 2119 keyword component
function Keyword({ type, children }: { type: 'must' | 'should' | 'may'; children: React.ReactNode }) {
  const classes = {
    must: 'rfc-keyword rfc-must',
    should: 'rfc-keyword rfc-should',
    may: 'rfc-keyword rfc-may',
  }
  return <span className={classes[type]}>{children}</span>
}

// Spec note component
function Note({ children }: { children: React.ReactNode }) {
  return <div className="spec-note">{children}</div>
}

// Warning component
function Warning({ children }: { children: React.ReactNode }) {
  return <div className="spec-warning">{children}</div>
}

// Example component
function Example({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="spec-example">
      {title && <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{title}</div>}
      {children}
    </div>
  )
}

// Field table component
function FieldTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="spec-table">
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

function FieldRow({ name, type, required, children }: {
  name: string;
  type: string;
  required?: boolean;
  children: React.ReactNode
}) {
  return (
    <tr>
      <td><code>{name}</code></td>
      <td><code>{type}</code></td>
      <td>{required ? <span className="text-red-600 font-medium">Yes</span> : 'No'}</td>
      <td>{children}</td>
    </tr>
  )
}

// Type table for primitive types
function TypeTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="spec-table">
        <thead>
          <tr>
            <th>APIx Type</th>
            <th>Description</th>
            <th>Format</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

function TypeRow({ name, description, format, example }: {
  name: string;
  description: string;
  format?: string;
  example?: string
}) {
  return (
    <tr>
      <td><code>{name}</code></td>
      <td>{description}</td>
      <td>{format ? <code>{format}</code> : '—'}</td>
      <td>{example ? <code>{example}</code> : '—'}</td>
    </tr>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Keyword,
    Note,
    Warning,
    Example,
    FieldTable,
    FieldRow,
    TypeTable,
    TypeRow,
  }
}

export { Keyword, Note, Warning, Example, FieldTable, FieldRow, TypeTable, TypeRow }
