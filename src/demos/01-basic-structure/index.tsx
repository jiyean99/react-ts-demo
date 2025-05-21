import { CodeBlock } from '../../componennts/CodeBlock';
import { InlineCode } from '@/componennts/InlineCode.tsx';

const BasicStructureDemo = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>01 - Basic Vite + React + TypeScript 구조</h2>

      <section>
        <h3>📁 프로젝트 기본 구조</h3>
        <CodeBlock>
          {`
  src/
  ├── App.tsx         // 루트 컴포넌트
  ├── main.tsx        // 진입 파일
  ├── vite-env.d.ts   // Vite 타입 선언
  index.html
  tsconfig.json       // TypeScript 설정
  vite.config.ts      // Vite 설정
`}
        </CodeBlock>
      </section>

      <section>
        <h3>🧩 JSX와 TSX</h3>
        <p>
          리액트에서 JSX 문법을 사용하려면 파일 확장자가 <InlineCode>.tsx</InlineCode> 이어야 하며,
          타입스크립트와 함께 사용할 수 있습니다.
        </p>
        <CodeBlock>
          {`
const Hello = () => {
  return <h1>Hello, world!</h1>;
};
`}
        </CodeBlock>
      </section>

      <section>
        <h3>✅ 루트 컴포넌트: App.tsx</h3>
        <p>화면에 가장 먼저 렌더링되는 컴포넌트입니다.</p>

        <CodeBlock>
            {`
function App() {
  return (
    <div>
      <h1>React + TypeScript 함수형 기본구조</h1>
    </div>
  );
}
`}
        </CodeBlock>
        <CodeBlock>
          {`
const App = () => {
  return (
    <div>
      <h1>React + TypeScript 화살표 함수형 기본구조</h1>
    </div>
  );
}
`}
        </CodeBlock>
      </section>

      <section>
        <h3>✅ main.tsx</h3>
        <p>
          ReactDOM을 통해 <InlineCode>App</InlineCode>을 <InlineCode>root</InlineCode> DOM에 렌더링합니다.
        </p>
        <CodeBlock>
          {`
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`}
        </CodeBlock>
      </section>

      <section>
        <h3>🧠 TypeScript의 느낌표 (!) 의미</h3>
        <p>
          <InlineCode>document.getElementById('root')!</InlineCode> 에서 <InlineCode>!</InlineCode>는 해당 값이{' '}
          <strong>null이 아님</strong>을 명시적으로 알려주는 <em>non-null assertion</em>입니다.
        </p>
      </section>

      <section>
        <h3>✅ useState에 타입 명시</h3>
        <CodeBlock>
          {`
const [count, setCount] = useState<number>(0);
`}
        </CodeBlock>
        <p>초기값을 기반으로 타입을 추론할 수 있지만, 명시적으로 지정해주면 더 안전합니다.</p>
      </section>
    </div>
  );
};

export default BasicStructureDemo;
