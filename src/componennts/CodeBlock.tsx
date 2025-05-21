type CodeBlockProps = {
  children: string;
};

export const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <pre
      style={{
        backgroundColor: '#d5d5d5',
        padding: '1em',
        borderRadius: '6px',
        overflowX: 'auto',
        fontSize: '0.9rem',
        lineHeight: 1.5,
        fontFamily: "'Fira Code', 'Courier New', monospace",
      }}
    >
      <code
        style={{
          fontFamily: 'inherit',
          color: '#141414',
        }}
      >
        {children}
      </code>
    </pre>
  );
};
