import { useRef } from "react";
import IconButton from "../components/IconButton";
import { Code } from "lucide-react";
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
      <main>
        <Section1 />
        <Section3 />
      </main>
    </div>
  );
}

function Section1() {
  return (
    <section>
      <h1 className="text-3xl text-center fontt">
        JavasCript Algorithms Visualizer
      </h1>
    </section>
  );
}

function Section3() {
  const [array, setArray] = useState([]);
  const [workingArray, setWorkingArray] = useState([]);
  const [barCount, setBarCount] = useState(10);
  const [speed, setSpeed] = useState(300);
  const [isAnimating, setIsAnimating] = useState(false);
  const swapsRef = useRef([]);
  const intervalRef = useRef(null);

  // Initialize array and clear sorted array
  function init() {
    const newArray = [];
    for (let i = 0; i < barCount; i++) {
      newArray.push(Math.random());
    }
    setArray(newArray);
    setWorkingArray(newArray);
  }

  // Generate all swaps needed for bubble sort
  function bubbleSort(arr) {
    const swaps = [];
    let newArray = [...arr];
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] > newArray[i + 1]) {
          swapped = true;
          swaps.push([i, i + 1]);
          // Swap immediately to prepare for next iteration
          [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
        }
      }
    } while (swapped);

    return swaps;
  }

  // Animate the swaps one by one with 100ms delay
  function animateAlgo(swaps) {
    if (swaps.length === 0) return;

    let index = 0;
    let arr = [...array]; // start from original array
    setIsAnimating(true);

    intervalRef.current = setInterval(() => {
      if (index >= swaps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        return;
      }

      const [i, j] = swaps[index];
      // Swap elements in array
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setWorkingArray([...arr]);
      index++;
    }, speed);
  }

  function stopAnimation() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsAnimating(false);
  }

  function play() {
    swapsRef.current = bubbleSort(array); // get list of swaps
    animateAlgo(swapsRef.current);
  }

  function showArray(arr) {
    return arr.map((value, index) => (
      <Bar
        key={index}
        height={value * 100 + "%"}
        value={Math.floor(value * 100)}
      />
    ));
  }

  function handleBarCount(e) {
    setBarCount(e.target.value);
    init();
  }

  function handleSpeed(e) {
    setSpeed(e.target.value);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <section className="p-4 flex flex-col justify-center w-full">
      <div className="flex flex-col flex-1 ">
        <div className="relative flex h-[400px] items-end justify-between gap-1 border-2 border-white/25 p-4 rounded-2xl">
          <IconButton className="absolute top-2 right-2">
            <Code />
          </IconButton>
          {workingArray.length > 0 ? showArray(workingArray) : showArray(array)}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 p-2 mt-4">
            <label htmlFor="bars" className="text-sm">
              Bar count:{" "}
              <span className="text-orange-400 font-medium">{barCount}</span>
            </label>
            <input
              type="range"
              id="bars"
              min={5}
              max={15}
              step={1}
              onChange={handleBarCount}
              value={barCount}
              className="bg-stone-700 slider rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 p-2 mt-4">
            <label htmlFor="bars" className="text-sm">
              Speed:{" "}
              <span className="text-orange-400 font-medium">{speed}</span>
            </label>
            <input
              type="range"
              id="speed"
              min={50}
              max={1000}
              step={50}
              onChange={handleSpeed}
              value={speed}
              className="bg-stone-700 slider rounded-full"
            />
          </div>

          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={init}
              disabled={isAnimating}
              className="px-4 bg-orange-500/25 py-2 rounded-lg text-orange-400 disabled:grayscale ease-in duration-75"
            >
              init
            </button>
            <button
              onClick={play}
              disabled={isAnimating}
              className="px-4 w-full bg-orange-500/25 py-2 rounded-lg text-orange-400 disabled:grayscale ease-in duration-75"
            >
              play
            </button>
            <button
              onClick={stopAnimation}
              disabled={!isAnimating}
              className="px-4 bg-orange-500/25 py-2 rounded-lg text-orange-400 disabled:grayscale ease-in duration-75"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bar(props) {
  return (
    <div
      key={props.index}
      style={{ height: props.height }}
      className="rounded-full w-full relative bg-orange-500/70 text-xs flex items-center justify-center text-orange-50"
    >
      <span className="px-1">{props.value}</span>
    </div>
  );
}
