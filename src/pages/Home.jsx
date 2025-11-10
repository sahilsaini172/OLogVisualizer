import { useState } from "react";
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
  const array = [];

  function randomFillArray(array) {
    for (let i = 0; i < n; i++) {
      array[i] = Math.random();
    }
  }

  function bubbleSort(arr) {
    do {
      var swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1 > arr[i]]) {
          swapped = true[(arr[i - 1], (arr[i] = [arr[i], arr[i - 1]]))];
        }
      }
    } while (swapped);
  }

  function showArray(array) {
    randomFillArray(array);
    return array.map((value, index) => (
      <Bar key={index} height={value * 100 + "%"} backgroundColor={"white"} />
    ));
  }

  return (
    <section className="p-6 flex items-center justify-center">
      <div className="flex h-[200px] items-end gap-6 justify-end">
        {showArray(array)}
      </div>
    </section>
  );
}

function Bar(props) {
  return (
    <div
      key={props.key}
      style={{ height: props.height, backgroundColor: props.backgroundColor }}
      className="w-2.5"
    ></div>
  );
}
