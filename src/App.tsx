import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React + TypeScript Concepts Demo</h1>
      <nav className="mb-4">
        <ul className="flex flex-wrap gap-2">
          {Array.from({ length: 15 }, (_, i) => {
            const demoNumber = String(i + 1).padStart(2, '0');
            return (
              <li key={demoNumber}>
                <Link
                  to={`/demo/${demoNumber}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Demo {demoNumber}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className="mt-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
