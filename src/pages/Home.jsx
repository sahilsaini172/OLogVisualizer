import { useState, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Bubblesort from "../algorithms/Bubblesort";
import NavigationDrawer from "../components/Navigation/NavigationDrawer";

// Lazy load all algorithms except Bubblesort
const Insertionsort = lazy(() => import("../algorithms/Insertionsort"));
const SelectionSort = lazy(() => import("../algorithms/Selectionsort"));
const OddEvenSort = lazy(() => import("../algorithms/OddEvensort"));
const CombSort = lazy(() => import("../algorithms/Combsort"));
const ShakerSort = lazy(() => import("../algorithms/Shakersort"));
const GnomeSort = lazy(() => import("../algorithms/Gnomesort"));

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [algoSelected, setAlgoSelected] = useState(0);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function renderAlgo() {
    switch (algoSelected) {
      case 0:
        return <Bubblesort />;
      case 1:
        return <Insertionsort />;
      case 2:
        return <SelectionSort />;
      case 3:
        return <OddEvenSort />;
      case 4:
        return <CombSort />;
      case 5:
        return <ShakerSort />;
      case 6:
        return <GnomeSort />;
      default:
        return <Bubblesort />;
    }
  }

  return (
    <div className="flex flex-col bg-surface text-onSurface">
      <header>
        <Navbar sidebarStatus={isOpen} toggleSidebar={toggleSidebar} />
      </header>
      <NavigationDrawer
        sidebarStatus={isOpen}
        setAlgoSelected={setAlgoSelected}
        algoSelected={algoSelected}
        toggleSidebar={toggleSidebar}
      />
      <main className="p-4">
        <Suspense
          fallback={<div className="text-center p-8">Loading Algorithm...</div>}
        >
          {renderAlgo()}
        </Suspense>
      </main>
    </div>
  );
}
