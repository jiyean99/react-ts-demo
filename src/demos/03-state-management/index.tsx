// src/demos/03-state-management/StateManagementDemo.tsx
import { useState, useReducer, useContext, createContext } from 'react'
import { CodeBlock } from '@/componennts/CodeBlock.tsx';

// ---------------- useState 예시 ----------------
const CounterWithState = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>카운터 (useState): {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

// ---------------- useReducer 예시 ----------------
type Action = { type: 'increment' } | { type: 'decrement' }

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <p>카운터 (useReducer): {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
}

// ---------------- useContext 예시 ----------------
const ThemeContext = createContext<'light' | 'dark'>('light')

const ThemedBox = () => {
  const theme = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <div
      style={{
        backgroundColor: isDark ? '#333' : '#eee',
        color: isDark ? '#fff' : '#000',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      현재 테마는 <strong>{theme}</strong>입니다.
    </div>
  )
}

const ContextExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedBox />
      <button onClick={toggleTheme} style={{ marginTop: '0.5rem' }}>
        토글 테마
      </button>
    </ThemeContext.Provider>
  )
}

// ---------------- 데모 전체 페이지 ----------------
const StateManagementDemo = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>03 - 상태 관리</h2>

      <section>
        <h3>🧠 useState</h3>
        <p>
          가장 기본적인 상태 관리 훅입니다. 숫자, 문자열, 객체 등 다양한 타입의 값을 저장할 수 있습니다.
        </p>
        <CodeBlock>
{`
const [count, setCount] = useState<number>(0);
`}
        </CodeBlock>
        <CounterWithState />
      </section>

      <section>
        <h3>🧠 useReducer</h3>
        <p>
          복잡한 상태 로직을 관리할 때 사용하는 훅입니다. reducer 함수와 dispatch 패턴을 따릅니다.
        </p>
        <CodeBlock>
{`
const reducer = (state, action) => { ... };
const [state, dispatch] = useReducer(reducer, initialState);
`}
        </CodeBlock>
        <CounterWithReducer />
      </section>

      <section>
        <h3>🧠 useContext</h3>
        <p>
          여러 컴포넌트에 상태를 전역처럼 전달할 때 사용하는 훅입니다. 테마, 언어 설정 등에 자주 사용됩니다.
        </p>
        <CodeBlock>
{`
const ThemeContext = createContext('light');
const value = useContext(ThemeContext);
`}
        </CodeBlock>
        <ContextExample />
      </section>
    </div>
  )
}

export default StateManagementDemo
