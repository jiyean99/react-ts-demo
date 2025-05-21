// src/demos/08-use-reducer/UseReducerDemo.tsx
import { useReducer } from 'react';
import { CodeBlock } from '@/componennts/CodeBlock.tsx';
import { InlineCode } from '@/componennts/InlineCode.tsx';

// 상태 타입 정의
type State = {
  count: number;
};

// 액션 타입 정의
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

// 리듀서 함수 정의
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>08 - useReducer</h2>

      <section>
        <h3>🧠 useReducer를 사용한 상태 관리</h3>
        <p>
          복잡한 상태 변경 로직이 필요한 경우 <InlineCode>useReducer</InlineCode>를 사용할 수 있습니다.
          <br />
          상태와 액션을 명확하게 정의하여 관리할 수 있어요.
        </p>

        <CodeBlock>
          {`const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'increment' })`}
        </CodeBlock>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '1rem' }}>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <strong>{state.count}</strong>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      </section>
    </div>
  );
};

export default UseReducerDemo;
