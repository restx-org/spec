# RESTx Language Specification

A declarative domain-specific language (DSL) for backend API development.

## Overview

RESTx provides a concise, human-readable syntax for defining REST APIs that compiles to production-ready backend services, OpenAPI specifications, and database migrations.

## Development

This project uses Next.js with MDX to compile the specification to a static HTML site.

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static site
npm run build

# Export static HTML
npm run export
```

### Project Structure

```
restx-spec/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── page.mdx        # Main specification content
│   ├── components/
│   │   ├── Layout.tsx      # Site layout component
│   │   └── mdx-components.tsx  # Custom MDX components
│   └── styles/
│       └── globals.css     # Global styles and Tailwind
├── next.config.mjs         # Next.js + MDX configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json
```

### Contributing

1. Edit `src/app/page.mdx` for specification content
2. Use RFC 2119 keywords (MUST, SHOULD, MAY) for requirements
3. Add code examples in fenced code blocks with `restx` language tag
4. Run `npm run dev` to preview changes

### Custom Components

The following MDX components are available:

- `<Note>` - Informational callouts
- `<Warning>` - Warning callouts
- `<Example>` - Example blocks
- `<FieldTable>` / `<FieldRow>` - Field definition tables
- `<TypeTable>` / `<TypeRow>` - Type definition tables

## License

MIT

## Links

- [Specification](https://restx-org.github.io/spec)
- [GitHub](https://github.com/restx-org/spec)
