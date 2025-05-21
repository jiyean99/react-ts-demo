// src/demos/10-custom-hook/CustomHookDemo.tsx
import { useState, useEffect, useRef } from 'react';
import { CodeBlock } from '@/componennts/CodeBlock.tsx';

// ✅ 1. useWindowWidth 커스텀 훅
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

// ✅ 2. useDocumentTitle
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

// ✅ 3. useDarkMode
const useDarkMode = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [enabled]);

  return [enabled, setEnabled] as const;
};

// ✅ 4. useIsMounted
const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

// ✅ 5. useInterval
const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

// ✅ 6. useLocalStorage
const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('로컬 스토리지 저장 중 오류 발생:', error);
    }
  };


  return [storedValue, setValue] as const;
};

const CustomHookDemo = () => {
  const width = useWindowWidth();
  useDocumentTitle(`현재 너비: ${width}px`);
  const [darkMode, setDarkMode] = useDarkMode();
  const isMounted = useIsMounted();
  const [count, setCount] = useState(0);
  useInterval(() => setCount((c) => c + 1), 1000);
  const [name, setName] = useLocalStorage('name', '지연');

  useEffect(() => {
    if (isMounted.current) {
      console.log('컴포넌트가 마운트된 상태입니다.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h2>10 - Custom Hook</h2>
      <p>
        ✅ 커스텀 훅이란?<br />
        커스텀 훅(Custom Hook) 은 use로 시작하는 함수로, 내부에서 다른 리액트 훅들(useState, useEffect, useRef 등)을 사용할 수 있습니다. <br />
        React 컴포넌트끼리 중복되는 로직이 생기면 그걸 함수로 빼서 재사용하고 싶을때?<br />
        바로 그걸 커스텀 훅으로 만드는 것입니다.<br />
      </p>

      <section>
        <h3>🔄 useWindowWidth</h3>
        <p>
          현재 브라우저 너비: <strong>{width}px</strong>
        </p>
        <CodeBlock>
          {`const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}`}
        </CodeBlock>
      </section>

      <section>
        <h3>📝 useDocumentTitle</h3>
        <p>문서 제목이 "현재 너비: {width}px"로 바뀝니다.</p>
        <CodeBlock>
          {`const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
}`}
        </CodeBlock>
      </section>

      <section>
        <h3>🌙 useDarkMode</h3>
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? '다크모드 켜짐' : '다크모드 꺼짐'}
        </button>
        <CodeBlock>
          {`const useDarkMode = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [enabled]);
  return [enabled, setEnabled] as const;
}`}
        </CodeBlock>
      </section>

      <section>
        <h3>🔍 useIsMounted</h3>
        <p>마운트 상태 확인 훅입니다. 콘솔에서 사용 가능</p>
        <CodeBlock>
          {`const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}`}
        </CodeBlock>
      </section>

      <section>
        <h3>⏱️ useInterval</h3>
        <p>1초마다 증가하는 카운터: {count}</p>
        <CodeBlock>
          {`const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}`}
        </CodeBlock>
      </section>

      <section>
        <h3>💾 useLocalStorage</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <p>어플리케이션 로컬스트리지에서 확인 가능</p>
        <CodeBlock>
          {`const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {}
  };
  return [storedValue, setValue] as const;
}`}
        </CodeBlock>
      </section>
    </div>
  );
};

export default CustomHookDemo;
