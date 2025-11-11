import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function openSidebar() {
    setIsOpen(true);
  }

  function closeSidebar() {
    setIsOpen(false);
  }
  return (
    <div className="flex flex-col">
      <header>
        <Navbar sidebarStatus={isOpen} toggleSidebar={openSidebar} />
      </header>
      <SideBar sidebarStatus={isOpen} toggleSidebar={closeSidebar} />
      <main className="p-6">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </div>
  );
}

function Section1() {
  return (
    <section>
      <h1 className="text-5xl text-center fontt">
        JavasCript Algorithms Visualizer
      </h1>
    </section>
  );
}

function Section2() {
  return (
    <section className="p-6 flex flex-col">
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <div className="border h-[100px] rounded-lg"></div>
        <div className="border h-[100px] rounded-lg"></div>
        <div className="border h-[100px] rounded-lg"></div>
      </div>
    </section>
  );
}

function Section3() {
  const n = 10;
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  function init() {
    const newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push(Math.random());
    }
    setSortedArray([]);
    setArray(newArray);
  }

  function play() {
    bubbleSort(array);
  }

  function bubbleSort(array) {
    const newArray = [...array];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i + 1] > newArray[i]) {
          swapped = true;
          [newArray[i + 1], newArray[i]] = [newArray[i], newArray[i + 1]];
        }
      }
    } while (swapped);
    setSortedArray(newArray);
  }

  function showArray(array) {
    return array.map((value, index) => {
      return (
        <Bar key={index} height={value * 100 + "%"} backgroundColor={"white"} />
      );
    });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <section className="p-6 flex items-center justify-center">
      <div className="flex flex-col ">
        <div className="flex h-[200px] items-end gap-6 justify-end">
          {sortedArray.length > 0 ? showArray(sortedArray) : showArray(array)}
        </div>
        <div className="flex items-center gap-4 mt-5">
          <button
            onClick={init}
            className="px-4 bg-orange-500/25 py-2 rounded-lg text-orange-400"
          >
            init
          </button>
          <button
            onClick={play}
            className="px-4 bg-orange-500/25 py-2 rounded-lg text-orange-400 disabled:opacity-50"
          >
            play
          </button>
        </div>
      </div>
    </section>
  );
}

function Bar(props) {
  return (
    <div
      key={props.index}
      style={{ height: props.height, backgroundColor: props.backgroundColor }}
      className="w-2.5"
    ></div>
  );
}
