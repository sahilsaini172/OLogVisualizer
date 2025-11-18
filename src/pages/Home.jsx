import { useState, lazy, Suspense, useEffect } from "react";
import Navbar from "../components/Navbar";
import Bubblesort from "../algorithms/Bubblesort";
import NavigationDrawer from "../components/Navigation/NavigationDrawer";
import handleMaxBar from "../utils/functions";
import Mergesort from "../algorithms/Mergesort";

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
  const [windowWidth, setWindowWidth] = useState(null);
  const [maxBars, setMaxBars] = useState(10);

  useEffect(() => {
    // Set window size on mount
    setWindowWidth(window.innerWidth);
    setMaxBars(handleMaxBar(windowWidth));
  });

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function renderAlgo() {
    switch (algoSelected) {
      case 0:
        return <Bubblesort maxBars={maxBars} />;
      case 1:
        return <Insertionsort maxBars={maxBars} />;
      case 2:
        return <SelectionSort maxBars={maxBars} />;
      case 3:
        return <OddEvenSort maxBars={maxBars} />;
      case 4:
        return <CombSort maxBars={maxBars} />;
      case 5:
        return <ShakerSort maxBars={maxBars} />;
      case 6:
        return <GnomeSort maxBars={maxBars} />;
      case 7:
        return <Mergesort maxBars={maxBars} />;
      default:
        return <Bubblesort maxBars={maxBars} />;
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
