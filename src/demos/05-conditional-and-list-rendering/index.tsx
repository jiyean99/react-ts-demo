// src/demos/05-conditional-and-list-rendering/ConditionalAndListRenderingDemo.tsx
import { useState } from 'react'
import { InlineCode } from '@/componennts/InlineCode.tsx';
import { CodeBlock } from '@/componennts/CodeBlock.tsx';

const ConditionalExample = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '숨기기' : '보이기'}
      </button>

      <p style={{ marginTop: '0.5rem' }}>
        <strong>1. AND 연산자</strong> → <InlineCode>{'{isVisible && <p>내용</p>}'}</InlineCode>
      </p>
      {isVisible && <p>이 문장은 isVisible이 true일 때만 보입니다.</p>}

      <p style={{ marginTop: '0.5rem' }}>
        <strong>2. 삼항 연산자</strong> → <InlineCode>{'{isVisible ? "보임" : "숨김"}'}</InlineCode>
      </p>
      <p>{isVisible ? '보이는 상태입니다!' : '숨겨진 상태입니다!'}</p>

      <p style={{ marginTop: '0.5rem' }}>
        <strong>3. Early Return 패턴</strong> → <InlineCode>if (!조건) return null;</InlineCode> <br />
        (이 예제에서는 UI 상 표현만 설명)
      </p>
    </div>
  )
}

const ListRenderingExample = () => {
  const fruits = ['사과', '바나나', '딸기', '포도'];

  return (
    <div>
      <p>
        <strong>Array.map()</strong>을 사용하여 배열을 JSX로 변환합니다:
      </p>

      <CodeBlock>
        {`const fruits = ['사과', '바나나']\nfruits.map((item, idx) => (\n  <li key={idx}>{item}</li>\n))`}
      </CodeBlock>

      <ul style={{ marginTop: '1rem' }}>
        {fruits.map((item, index) => (
          <li key={index}>🍎 {item}</li>
        ))}
      </ul>

      <p style={{ marginTop: '1rem' }}>
        ⚠️ <strong>key prop</strong>은 React가 각 항목을 식별하는 데 사용됩니다. key는 고유해야 하며, 일반적으로 데이터에 고유한 ID가 있다면 그것을 사용하는 것이 좋습니다.
        <br />
        숫자 인덱스를 key로 사용하는 것은 항목이 추가/삭제/정렬될 수 있는 경우 비추천됩니다.
      </p>

      <p style={{ marginTop: '1rem' }}>
        ⛔ <InlineCode>forEach()</InlineCode>는 JSX를 반환하지 않기 때문에 렌더링에 사용할 수 없습니다.
      </p>

      <p style={{ marginTop: '1rem' }}>
        ✅ 배열이 비어 있을 경우 조건부 렌더링을 활용할 수 있습니다:
      </p>

      <CodeBlock>
        {`{fruits.length === 0 ? (\n  <p>과일이 없습니다.</p>\n) : (\n  <ul>\n    {fruits.map((item) => <li>{item}</li>)}\n  </ul>\n)}`}
      </CodeBlock>
    </div>
  );
};


const ConditionalAndListRenderingDemo = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>05 - 조건부 렌더링 / 리스트 렌더링</h2>

      <section>
        <h3>🔀 조건부 렌더링</h3>
        <p>
          JSX에서 조건에 따라 UI를 다르게 보여줄 수 있습니다. <br />
          <InlineCode>&&</InlineCode>, 삼항 연산자(<InlineCode>?</InlineCode>), early return 패턴을 활용합니다.
        </p>
        <ConditionalExample />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>📋 리스트 렌더링</h3>
        <p>
          배열을 <InlineCode>map()</InlineCode>으로 순회해 여러 JSX 엘리먼트를 렌더링할 수 있습니다. <br />
          각 항목에는 <InlineCode>key</InlineCode> prop이 필요합니다.
        </p>
        <ListRenderingExample />
      </section>
    </div>
  )
}

export default ConditionalAndListRenderingDemo
