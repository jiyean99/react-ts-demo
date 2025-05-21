import { useState } from 'react';

type CodeBlockProps = {
  children: string;
};

export const CodeBlock = ({ children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // 1.5초 후 메시지 숨김
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
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
        <code style={{ fontFamily: 'inherit', color: '#141414' }}>
          {children}
        </code>
      </pre>

      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          backgroundColor: copied ? '#4caf50' : '#333',
          color: '#fff',
          border: 'none',
          padding: '4px 8px',
          fontSize: '0.75rem',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {copied ? '복사완료!' : '복사'}
      </button>
    </div>
  );
};
