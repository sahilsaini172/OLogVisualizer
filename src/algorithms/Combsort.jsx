import { useRef } from "react";
import IconButton from "../components/Buttons/IconButton";
import { Code } from "lucide-react";
import { useEffect, useState } from "react";
import ElevatedCard from "../components/cards/ElevatedCards";
import Bar from "../components/Bar";
import StandardButtonS from "../components/Buttons/StandardButton";
import TonalButton from "../components/Buttons/TonalButton";
import SelectionSortBar from "../components/SelectionSortBar";
import IndexRow from "../components/IndexRow";

export default function CombSort() {
  const [array, setArray] = useState([]);
  const [workingArray, setWorkingArray] = useState([]);
  const [barCount, setBarCount] = useState(10);
  const [speed, setSpeed] = useState(300);
  const [isAnimating, setIsAnimating] = useState(false);
  const swapsRef = useRef([]);
  const intervalRef = useRef(null);
  const [selectedBar, setSelectedBar] = useState([]);
  const [secondSelectedBar, setSecondSelectedBar] = useState([]);
  const [betweenBars, setBetweenBars] = useState([]);

  // Initialize array and clear sorted array
  function init() {
    const newArray = [];
    for (let i = 0; i < barCount; i++) {
      newArray.push(Math.random());
    }
    setArray(newArray);
    setWorkingArray(newArray);
  }

  function combSort(arr) {
    const swaps = [];
    let newArray = [...arr];
    let gap = newArray.length;
    const shrinkFactor = 1.3;
    let sorted = false;

    while (!sorted) {
      // Update the gap for next comb
      gap = Math.floor(gap / shrinkFactor);

      if (gap <= 1) {
        gap = 1;
        sorted = true;
      }

      // Compare all elements with current gap
      for (let i = 0; i + gap < newArray.length; i++) {
        if (newArray[i] > newArray[i + gap]) {
          swaps.push([i, i + gap]);
          [newArray[i], newArray[i + gap]] = [newArray[i + gap], newArray[i]];
          sorted = false;
        }
      }
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
        setSelectedBar([]);
        setSecondSelectedBar([]);
        setBetweenBars([]);
        return;
      }

      const [i, j] = swaps[index];
      setSelectedBar([i]);
      setSecondSelectedBar([j]);

      // Create array of all indices between i and j (exclusive)
      const betweenIndices = [];
      for (let k = i + 1; k < j; k++) {
        betweenIndices.push(k);
      }
      setBetweenBars(betweenIndices);

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
    swapsRef.current = combSort(array); // get list of swaps
    animateAlgo(swapsRef.current);
  }

  function showArray(arr) {
    return arr.map((value, index) => (
      <SelectionSortBar
        key={index}
        height={value * 100 + "%"}
        value={Math.floor(value * 100)}
        selected={selectedBar.includes(index)}
        secondSelected={secondSelectedBar.includes(index)}
        betweenBars={betweenBars.includes(index)}
        selectedBar={selectedBar.includes(index) ? "i" : null}
        secondSelectedBar={secondSelectedBar.includes(index) ? "j" : null}
      />
    ));
  }

  function handleBarCount(e) {
    setBarCount(e.target.value);
  }

  function handleSpeed(e) {
    setSpeed(e.target.value);
  }

  useEffect(() => {
    init();
  }, [barCount]);

  return (
    <ElevatedCard className={"flex flex-col"}>
      <div className="text-title-large flex items-center justify-between">
        <h2>Comb Sort</h2>
        <IconButton>
          <Code />
        </IconButton>
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="relative flex h-[400px] items-end justify-between gap-0.5">
          {workingArray.length > 0 ? showArray(workingArray) : showArray(array)}
        </div>
        <IndexRow count={barCount} />
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 p-2 mt-4">
            <label htmlFor="bars" className="text-label-medium">
              Bar count:{" "}
              <span className="text-secondary font-medium">{barCount}</span>
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
            <label htmlFor="bars" className="text-label-medium">
              Speed: <span className="text-secondary font-medium">{speed}</span>
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

          <div className="flex items-center gap-4 mt-5 w-full">
            <TonalButton
              text="Randomize"
              disabled={isAnimating}
              onClick={init}
            />
            <StandardButtonS
              onClick={play}
              variant="primary"
              text="Play"
              className="flex-1"
            />
            <TonalButton
              text="Stop"
              disabled={!isAnimating}
              onClick={stopAnimation}
            />
          </div>
        </div>
      </div>
    </ElevatedCard>
  );
}
