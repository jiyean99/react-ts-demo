// src/demos/06-component-reuse/ComponentReuseDemo.tsx
import React from 'react'
import { CodeBlock } from '@/componennts/CodeBlock.tsx';
import { InlineCode } from '@/componennts/InlineCode.tsx';

// 🎯 1. props 예제용 Button 컴포넌트
type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  color?: 'blue' | 'red'
}

const Button = ({ children, onClick, color = 'blue' }: ButtonProps) => {
  const style = {
    backgroundColor: color === 'blue' ? '#007bff' : '#dc3545',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginRight: 8,
  }

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  )
}

// 📦 2. children 예제용 Wrapper 컴포넌트
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ border: '2px dashed #999', padding: '1rem', marginTop: '1rem' }}>
      {children}
    </div>
  )
}

const ComponentReuseDemo = () => {
  const handleClick = () => alert('버튼 클릭!')

  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>06 - 컴포넌트 추상화 및 재사용</h2>

      {/* 🔹 props 전달 예시 */}
      <section>
        <h3>🎯 props를 통한 데이터 전달</h3>
        <p>
          컴포넌트에 데이터를 전달할 땐 <InlineCode>props</InlineCode>를 사용합니다.<br />
          아래처럼 속성을 통해 클릭 이벤트나 색상을 전달할 수 있어요.
        </p>
        <CodeBlock>
          {`
type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  color?: 'blue' | 'red'
}

const Button = ({ children, onClick, color = 'blue' }: ButtonProps) => {
  const style = {
    backgroundColor: color === 'blue' ? '#007bff' : '#dc3545',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginRight: 8,
  }

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  )
}
`}
        </CodeBlock>
        <CodeBlock>
            {`
<Button onClick={handleClick}>기본 버튼</Button>\n<Button color="red">빨간 버튼</Button>
`}
        </CodeBlock>

        <div style={{ marginTop: '1rem' }}>
          <Button onClick={handleClick}>기본 버튼</Button>
          <Button onClick={handleClick} color="red">
            빨간 버튼
          </Button>
        </div>
      </section>

      {/* 🔹 children 활용 예시 */}
      <section style={{ marginTop: '2rem' }}>
        <h3>📦 children 활용</h3>
        <p>
          <InlineCode>children</InlineCode>은 컴포넌트 내부에 중첩된 JSX를 받는 특수한 prop입니다.
          <br />
          아래 예시는 Wrapper 컴포넌트에 여러 JSX를 감싸서 전달하는 형태예요.
        </p>

          <CodeBlock>
            {`<Wrapper>\n  <p>이 부분은 Wrapper 컴포넌트의 children입니다.</p>\n  <Button>안쪽 버튼</Button>\n</Wrapper>`}
          </CodeBlock>

        <Wrapper>
          <p>이 부분은 Wrapper 컴포넌트의 children입니다.</p>
          <Button onClick={handleClick}>Wrapper 안 버튼</Button>
        </Wrapper>
      </section>
    </div>
  )
}

export default ComponentReuseDemo
