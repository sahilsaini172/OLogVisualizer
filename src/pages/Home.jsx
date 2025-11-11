import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Bubblesort from "../algorithms/Bubblesort";
import Insertionsort from "../algorithms/Insertionsort";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [algo, setAlgo] = useState("Bubblesort");

  function openSidebar() {
    setIsOpen(true);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  function renderAlgo() {
    switch (algo) {
      case "BubbleSort":
        return <Bubblesort />;
      case "InsertionSort":
        return <Insertionsort />;
      default:
        return <Bubblesort />;
    }
  }

  return (
    <div className="flex flex-col">
      <header>
        <Navbar sidebarStatus={isOpen} toggleSidebar={openSidebar} />
      </header>
      <SideBar
        sidebarStatus={isOpen}
        toggleSidebar={closeSidebar}
        setAlgo={setAlgo}
        algo={algo}
      />
      <main>
        <h1 className="text-3xl text-center fontt">
          Javascript Algorithms Visualizer
        </h1>
        {renderAlgo()}
      </main>
    </div>
  );
}
