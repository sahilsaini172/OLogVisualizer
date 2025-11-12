import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Bubblesort from "../algorithms/Bubblesort";
import Insertionsort from "../algorithms/Insertionsort";
import SelectionSort from "../algorithms/Selectionsort";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [algo, setAlgo] = useState("Bubblesort");

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function renderAlgo() {
    switch (algo) {
      case "BubbleSort":
        return <Bubblesort />;
      case "InsertionSort":
        return <Insertionsort />;
      case "SelectionSort":
        return <SelectionSort />;
      default:
        return <Bubblesort />;
    }
  }

  return (
    <div className="flex flex-col bg-surface text-onSurface">
      <header>
        <Navbar sidebarStatus={isOpen} toggleSidebar={toggleSidebar} />
      </header>
      <SideBar
        sidebarStatus={isOpen}
        setAlgo={setAlgo}
        algo={algo}
        toggleSidebar={toggleSidebar}
      />
      <main className="p-4">
        <h1 className="text-headline-large">
          Javascript Algorithms Visualizer
        </h1>
        <div className="mt-6">{renderAlgo()}</div>
      </main>
    </div>
  );
}
