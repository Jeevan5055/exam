## Packages
framer-motion | Smooth scroll reveals and page animations
react-hook-form | Form state management
@hookform/resolvers | Zod validation resolver for the contact form

## Notes
- Smooth scrolling to sections is implemented using native CSS `scroll-behavior: smooth`.
- The navigation bar is sticky, and CSS `scroll-padding-top` is used to offset the header height.
- Contact form submits to POST `/api/contact` using the provided schema.
