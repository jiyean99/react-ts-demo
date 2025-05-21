// src/demos/02-components/ComponentDemo.tsx
import React from 'react'
import { CodeBlock } from '@/componennts/CodeBlock.tsx';
import { InlineCode } from '@/componennts/InlineCode.tsx';

type GreetingProps = {
  name: string
  age?: number
}

const Greeting = ({ name, age }: GreetingProps) => {
  return (
    <div>
      <strong>Hello, {name}!</strong>
      {age && <p>You are {age} years old.</p>}
    </div>
  )
}

type CardProps = {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '1rem',
        background: '#f9f9f9',
        color:'gray'
      }}
    >
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  )
}

const ComponentDemo = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>02 - Components & Props</h2>

      <section>
        <h3>📌 React 컴포넌트란?</h3>
        <p>
          컴포넌트는 재사용 가능한 UI 조각입니다. 함수형 컴포넌트를 사용하며, JSX를 반환합니다.
        </p>
        <CodeBlock>
{`
function MyComponent() {
  return <div>Hello</div>
}
`}
        </CodeBlock>
      </section>

      <section>
        <h3>🧩 Props 란?</h3>
        <p>
          Props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터입니다. React에서는 읽기 전용입니다.
        </p>
        <CodeBlock>
{`
// Greeting 컴포넌트에서 name, age를 props로 받음
type GreetingProps = {
  name: string
  age?: number
}
`}
        </CodeBlock>
        <Greeting name="지연" age={28} />
      </section>

      <section>
        <h3>📦 children props</h3>
        <p>
          특별한 prop인 <InlineCode>children</InlineCode>은 컴포넌트 태그 사이의 내용을 포함할 수 있도록 합니다.
        </p>
        <CodeBlock>
{`
type CardProps = {
  title: string
  children: React.ReactNode
}
`}
        </CodeBlock>
        <Card title="카드 예시">
          <p>이 영역은 children으로 전달됩니다.</p>
        </Card>
      </section>

      <section>
        <h3>📐 props 타입 정의 모음 분리</h3>
        <p>
          props의 타입을 <InlineCode>types/</InlineCode> 디렉토리에서 따로 정의하여 관리할 수 있습니다.
        </p>
        <CodeBlock>
{`
// types/Person.ts
export type Person = {
  name: string
  age: number
}
`}
        </CodeBlock>
      </section>

      <section>
        <h3>✅ 실제 컴포넌트 사용 예</h3>
        <p>Greeting과 Card를 조합하여 아래처럼 렌더링할 수 있습니다:</p>
        <Card title="지연">
          <Greeting name="지연" age={28} />
        </Card>
        <Card title="John">
          <Greeting name="John" />
        </Card>
      </section>
    </div>
  )
}

export default ComponentDemo
