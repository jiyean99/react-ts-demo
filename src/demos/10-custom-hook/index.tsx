// src/demos/10-custom-hook/CustomHookDemo.tsx
import React, { useState, useEffect } from 'react'

// ✅ 커스텀 훅 정의
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

const CustomHookDemo = () => {
  const width = useWindowWidth()

  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>10 - Custom Hook</h2>

      <section>
        <h3>🔄 useWindowWidth 커스텀 훅 사용 예시</h3>
        <p>
          커스텀 훅은 로직을 재사용 가능하도록 분리한 함수입니다. <br />
          <code>use</code>로 시작하고 다른 훅들을 내부에서 사용할 수 있어요.
        </p>

        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: 8 }}>
          <code>
{`const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return width
}`}
          </code>
        </pre>

        <p style={{ marginTop: '1rem' }}>현재 브라우저 너비: <strong>{width}px</strong></p>
      </section>
    </div>
  )
}

export default CustomHookDemo