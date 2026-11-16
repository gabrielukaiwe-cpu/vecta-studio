// Small icons drawn as code (SVG), so CSS can change their colour.
// In React, SVG settings are written in camelCase: strokeWidth, not stroke-width.

export function AddIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="17" r="1.2" />
      <circle cx="15" cy="17" r="1.2" />
      <path d="M1.5 2.5h2.3l2 9.5h9l1.7-6.8H5" />
      <path d="M11 3.5v3M9.5 5h3" />
    </svg>
  );
}

export function DecIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" />
      <path d="M6 10h8" />
    </svg>
  );
}

export function IncIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" />
      <path d="M6 10h8M10 6v8" />
    </svg>
  );
}

export function RemoveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" />
      <path d="M7 7l6 6M13 7l-6 6" />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h9.1a1 1 0 0 0 1-.8L20.5 7H6" />
    </svg>
  );
}
