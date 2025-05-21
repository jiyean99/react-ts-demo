// src/demos/04-event-handling/EventHandlingDemo.tsx
import React, { useState } from 'react'
import { InlineCode } from '@/componennts/InlineCode.tsx';
import { CodeBlock } from '@/componennts/CodeBlock.tsx';

const ClickExample = () => {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!')
  }

  return <button onClick={handleClick}>클릭해보세요</button>
}

const MouseEventExample = () => {
  const handleMouseEnter = () => {
    console.log('마우스를 올렸습니다')
  }

  const handleMouseLeave = () => {
    console.log('마우스를 벗어났습니다')
  }

  return (
    <div
      style={{ padding: '1rem', background: '#f0f0f0' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      이 영역에 마우스를 올려보세요
    </div>
  )
}

const KeyboardEventExample = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(`키 입력: ${e.key}`)
  }

  return <input type="text" onKeyDown={handleKeyDown} placeholder="키보드를 눌러보세요" />
}

const FormEventExample = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`입력한 값: ${value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} placeholder="입력 후 Enter" />
      <button type="submit">제출</button>
    </form>
  )
}

const EventHandlingDemo = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>04 - 이벤트 핸들링</h2>

      <section>
        <h3>🖱️ 기본 클릭 이벤트</h3>
        <p>
          <InlineCode>onClick</InlineCode> 핸들러를 사용하여 버튼을 클릭했을 때 함수를 실행할 수 있습니다.
        </p>
        <CodeBlock>
          {`const handleClick = () => {
  alert("버튼이 클릭되었습니다!");
};

return <button onClick={handleClick}>클릭</button>;`}
        </CodeBlock>
        <ClickExample />
      </section>

      <section>
        <h3>🖱️ 마우스 이벤트</h3>
        <p>
          <InlineCode>onMouseEnter</InlineCode>, <InlineCode>onMouseLeave</InlineCode> 등을 통해 사용자 인터랙션을 감지할 수
          있습니다.
        </p>
        <CodeBlock>
          {`const handleMouseEnter = () => {
  console.log("마우스 들어옴");
};

const handleMouseLeave = () => {
  console.log("마우스 나감");
};

return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>박스</div>;`}
        </CodeBlock>
        <MouseEventExample />
      </section>

      <section>
        <h3>⌨️ 키보드 이벤트</h3>
        <p>
          <InlineCode>onKeyDown</InlineCode>으로 입력 필드 내에서 어떤 키가 눌렸는지 확인할 수 있습니다.
        </p>
        <CodeBlock>
          {`const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log("입력된 키:", e.key);
};

return <input onKeyDown={handleKeyDown} />;`}
        </CodeBlock>
        <KeyboardEventExample />
      </section>

      <section>
        <h3>📝 폼 이벤트</h3>
        <p>
          <InlineCode>onChange</InlineCode>과 <InlineCode>onSubmit</InlineCode>을 활용해 입력값을 받아 처리할 수 있습니다.
        </p>
        <CodeBlock>
          {`const [value, setValue] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  alert(\`입력된 값: \${value}\`);
};

return (
  <form onSubmit={handleSubmit}>
    <input value={value} onChange={handleChange} />
    <button type="submit">제출</button>
  </form>
);`}
        </CodeBlock>
        <FormEventExample />
      </section>
    </div>

  )
}

export default EventHandlingDemo
