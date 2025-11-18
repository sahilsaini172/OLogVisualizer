import { lazy, Suspense } from "react";

//// Lazy load non-critical components
const Home = lazy(() => import("./pages/Home"));
function App() {
  return (
    <div className="h-screen bg-surface">
      <Suspense fallback={<div>Loading...</div>}>
      <Home/>
      </Suspense>
    </div>
  );
}

export default App;
