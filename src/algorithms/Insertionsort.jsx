import { useRef } from "react";
import IconButton from "../components/IconButton";
import { Code } from "lucide-react";
import { useEffect, useState } from "react";

export default function Insertionsort() {
  const [array, setArray] = useState([]);
  const [workingArray, setWorkingArray] = useState([]);
  const [barCount, setBarCount] = useState(10);
  const [speed, setSpeed] = useState(300);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBar, setSelectedBar] = useState([]);
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
  function insertionSort(arr) {
    const swaps = [];
    let newArray = [...arr];

    for (let i = 0; i < newArray.length; i++) {
      let currentValue = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] > currentValue) {
        swaps.push([j, j + 1]);
        newArray[j + 1] = newArray[j];
        j--;
      }
      newArray[j + 1] = currentValue;
    }
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
      setSelectedBar([i, j]);

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
    swapsRef.current = insertionSort(array); // get list of swaps
    animateAlgo(swapsRef.current);
  }

  function showArray(arr) {
    return arr.map((value, index) => (
      <Bar
        key={index}
        height={value * 100 + "%"}
        value={Math.floor(value * 100)}
        selected={selectedBar.includes(index)}
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
      <h2 className="font-semibold text-center py-3 text-xl">Insertion Sort</h2>
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

function Bar({ index, height, value, selected }) {
  return (
    <div
      key={index}
      style={{ height: height }}
      className={`rounded-full w-full relative ${
        !selected ? "bg-orange-500/70" : "bg-[#0096FF]"
      } text-xs flex items-center justify-center text-orange-50 ease-in duration-100`}
    >
      <span className="px-1">{value}</span>
    </div>
  );
}
