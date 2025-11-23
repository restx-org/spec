'use client'

import { useState, useEffect } from 'react'

const navigation = [
  { title: 'Introduction', href: '#introduction' },
  { title: 'Notational Conventions', href: '#notational-conventions' },
  { title: 'Design Philosophy', href: '#design-philosophy' },
  { title: 'Document Structure', href: '#document-structure' },
  { title: 'Syntax Reference', href: '#syntax-reference' },
  {
    title: 'Type System',
    href: '#type-system',
    children: [
      { title: 'Primitive Types', href: '#primitive-types' },
      { title: 'Type Modifiers', href: '#type-modifiers' },
      { title: 'Complex Types', href: '#complex-types' },
      { title: 'Generic Types', href: '#generic-types' },
      { title: 'Type Definitions', href: '#type-definitions' },
    ]
  },
  {
    title: 'Database Schema',
    href: '#database-schema',
    children: [
      { title: 'Table Definitions', href: '#table-definitions' },
      { title: 'Column Types', href: '#column-types' },
      { title: 'Constraints', href: '#constraints' },
      { title: 'Relationships', href: '#relationships' },
    ]
  },
  {
    title: 'Query Builder',
    href: '#query-builder',
    children: [
      { title: 'Query Operations', href: '#query-operations' },
      { title: 'Filter Expressions', href: '#filter-expressions' },
      { title: 'Aggregations', href: '#aggregations' },
    ]
  },
  {
    title: 'Routes & Endpoints',
    href: '#routes-endpoints',
    children: [
      { title: 'Route Syntax', href: '#route-syntax' },
      { title: 'Parameters', href: '#parameters' },
      { title: 'Request Body', href: '#request-body' },
      { title: 'Response Types', href: '#response-types' },
    ]
  },
  {
    title: 'Flow Operations',
    href: '#flow-operations',
    children: [
      { title: 'Assignments', href: '#assignments' },
      { title: 'Conditionals', href: '#conditionals' },
      { title: 'Pattern Matching', href: '#pattern-matching' },
      { title: 'Transactions', href: '#transactions' },
    ]
  },
  { title: 'Authentication & Authorization', href: '#authentication-authorization' },
  { title: 'Integrations', href: '#integrations' },
  { title: 'Environment Configuration', href: '#environment-configuration' },
  { title: 'Hooks & Middleware', href: '#hooks-middleware' },
  { title: 'Webhooks', href: '#webhooks' },
  { title: 'Scheduled Tasks', href: '#scheduled-tasks' },
  { title: 'Error Handling', href: '#error-handling' },
  { title: 'Annotations', href: '#annotations' },
  { title: 'Built-in Functions', href: '#built-in-functions' },
  { title: 'Grammar (EBNF)', href: '#grammar-ebnf' },
  { title: 'Implementation Notes', href: '#implementation-notes' },
  { title: 'Examples', href: '#examples' },
  { title: 'Appendix A: References', href: '#appendix' },
  { title: 'Appendix B: Grammar', href: '#appendix-b-grammar' },
  { title: 'Appendix C: OpenAPI Mapping', href: '#appendix-c-openapi' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                  padding: '0.5rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'none'
                }}
                className="lg-hidden"
              >
                <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>apix</span>
                <span style={{ color: 'var(--text-tertiary)' }}>spec</span>
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="version-badge">v1.0.0</span>
              <button
                onClick={toggleTheme}
                style={{
                  padding: '0.375rem',
                  background: 'transparent',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)'
                }}
                title="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
              <a
                href="https://github.com/apix-org/spec"
                style={{ color: 'var(--text-tertiary)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside style={{
        position: 'fixed',
        top: '3.5rem',
        left: 0,
        bottom: 0,
        width: '16rem',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-primary)',
        overflowY: 'auto',
        padding: '1rem 0'
      }}>
        <nav style={{ padding: '0 0.75rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navigation.map((item) => (
              <li key={item.href} style={{ marginBottom: '0.125rem' }}>
                <a href={item.href} className="nav-link">
                  {item.title}
                </a>
                {item.children && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0.25rem 0 0.5rem 0.75rem' }}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a href={child.href} className="nav-link" style={{ fontSize: '11px' }}>
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '16rem', paddingTop: '3.5rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 2rem 4rem 2rem' }}>
          <article>
            {children}
          </article>
        </div>
      </main>

      {/* Mobile sidebar toggle styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .lg-hidden { display: block !important; }
          aside {
            transform: translateX(${sidebarOpen ? '0' : '-100%'});
            transition: transform 0.2s ease;
          }
          main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  )
}
