type InlineCodeProps = {
  children: string;
};

export const InlineCode = ({ children }: InlineCodeProps) => {
  return (
    <code
      style={{
        backgroundColor: '#ddd',
        padding: '0.2em 0.4em',
        borderRadius: '4px',
        fontSize: '0.95em',
        fontFamily: "'Fira Code', 'Courier New', monospace",
        color:'#d63384',
        fontWeight: '500',
      }}
    >
      {children}
    </code>
  );
};
