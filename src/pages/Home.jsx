import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Bubblesort from "../algorithms/Bubblesort";
import Insertionsort from "../algorithms/Insertionsort";
import SelectionSort from "../algorithms/Selectionsort";
import NavigationDrawer from "../components/Navigation/NavigationDrawer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [algoSelected, setAlgoSelected] = useState("Bubblesort");

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
        <h1 className="text-headline-large">
          Javascript Algorithms Visualizer
        </h1>
        <div className="mt-6">{renderAlgo()}</div>
      </main>
    </div>
  );
}
