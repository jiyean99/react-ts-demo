import { useEffect, useState } from 'react'
import { CodeBlock } from '@/componennts/CodeBlock.tsx';

const UseEffectDepsDemo = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // 의존성 배열이 빈 배열이면 마운트 시 1회 실행
  useEffect(() => {
    console.log('🔵 컴포넌트 마운트 시 실행')
  }, [])

  // count가 변경될 때마다 실행
  useEffect(() => {
    console.log('🟡 count 변경:', count)
  }, [count])

  // text가 변경될 때마다 실행
  useEffect(() => {
    console.log('🟢 text 변경:', text)
  }, [text])

  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>09 - useEffect 의존성 배열</h2>

      <section>
        <h3>🎯 의존성 배열에 따른 useEffect 실행 조건</h3>
        <p>
          <code>useEffect</code>는 두 번째 인자로 전달된 <strong>의존성 배열</strong>의 값이 변경될 때마다 다시 실행됩니다.
        </p>

        <CodeBlock>
          {`// 마운트될 때 한 번만 실행
useEffect(() => {
  console.log('컴포넌트 마운트됨')
}, [])

// count가 변경될 때마다 실행
useEffect(() => {
  console.log('count 변경됨')
}, [count])

// text가 변경될 때마다 실행
useEffect(() => {
  console.log('text 변경됨')
}, [text])`}
        </CodeBlock>

        <div style={{ marginTop: '1rem' }}>
          <button onClick={() => setCount((prev) => prev + 1)}>count +</button>
          <span style={{ marginLeft: 8 }}>
            현재 count: <strong>{count}</strong>
          </span>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="텍스트 입력"
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
          />
          <p>현재 텍스트: <strong>{text}</strong></p>
        </div>
      </section>
    </div>
  )
}

export default UseEffectDepsDemo
