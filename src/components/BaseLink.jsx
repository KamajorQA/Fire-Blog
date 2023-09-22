function BaseLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export { BaseLink };
