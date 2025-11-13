import { useState } from "react";
import Navbar from "../components/Navbar";
import Bubblesort from "../algorithms/Bubblesort";
import Insertionsort from "../algorithms/Insertionsort";
import SelectionSort from "../algorithms/Selectionsort";
import NavigationDrawer from "../components/Navigation/NavigationDrawer";
import OddEvenSort from "../algorithms/OddEvensort";
import CombSort from "../algorithms/Combsort";
import ShakerSort from "../algorithms/Shakersort";
import GnomeSort from "../algorithms/Gnomesort";

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
      <main className="p-4">{renderAlgo()}</main>
    </div>
  );
}
