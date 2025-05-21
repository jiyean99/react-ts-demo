// src/demos/07-use-effect-async/UseEffectAsyncDemo.tsx
import { useEffect, useState } from 'react'
import { InlineCode } from '@/componennts/InlineCode.tsx';
import { CodeBlock } from '@/componennts/CodeBlock.tsx';

const UseEffectAsyncDemo = () => {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // 비동기 데이터 호출 시뮬레이션
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      // 실제 API 호출 대신 setTimeout으로 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setData(['React', 'TypeScript', 'useEffect', 'async/await'])
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>07 - useEffect + async</h2>

      <section>
        <h3>🔁 useEffect 안에서 비동기 처리</h3>
        <p>
          <InlineCode>useEffect</InlineCode> 내부에서 <InlineCode>async/await</InlineCode>를 사용할 땐,
          내부에 별도의 비동기 함수를 선언하고 실행해야 합니다.
        </p>

          <CodeBlock>
{`useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(...)
    setData(await res.json())
  }
  fetchData()
}, [])`}
          </CodeBlock>

        {loading ? (
          <p>데이터 불러오는 중...</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default UseEffectAsyncDemo
