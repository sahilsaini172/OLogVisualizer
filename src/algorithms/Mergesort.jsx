import { useRef, useState, useEffect } from "react";
import ElevatedCard from "../components/cards/ElevatedCards";
import StandardButtonS from "../components/Buttons/StandardButton";
import TonalButton from "../components/Buttons/TonalButton";
import SelectionSortBar from "../components/SelectionSortBar";
import IndexRow from "../components/IndexRow";
import CodeSnippet from "../components/CodeSnippet";
import { codeData } from "../data/codeSnippet";

export default function Mergesort({ maxBars }) {
  const [array, setArray] = useState([]);
  const [workingArray, setWorkingArray] = useState([]);
  const [barCount, setBarCount] = useState(10);
  const [speed, setSpeed] = useState(300);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBar, setSelectedBar] = useState([]);
  const intervalRef = useRef(null);

  // Initialize array
  function init() {
    const newArray = [];
    for (let i = 0; i < barCount; i++) {
      newArray.push(Math.random());
    }
    setArray(newArray);
    setWorkingArray(newArray);
    setSelectedBar([]);
  }

  // Merge sort generating all intermediate arrays (snapshots)
  // snapshots is an array of { array: [...], selected: [indices] }
  function mergeSortSnapshots(arr) {
    const snapshots = [];
    const aux = arr.slice(); // Auxiliary array to copy merges

    function merge(array, start, mid, end) {
      let i = start;
      let j = mid + 1;
      let k = start;

      // Temporary array for merged values
      const temp = [];

      while (i <= mid && j <= end) {
        // For visualization - highlight compared indices
        snapshots.push({ array: array.slice(), selected: [i, j] });

        if (array[i] <= array[j]) {
          temp.push(array[i]);
          i++;
        } else {
          temp.push(array[j]);
          j++;
        }
      }

      while (i <= mid) temp.push(array[i++]);
      while (j <= end) temp.push(array[j++]);

      // Copy merged back to array and push snapshot for full array update
      for (let x = start; x <= end; x++) {
        array[x] = temp[x - start];
      }
      snapshots.push({ array: array.slice(), selected: [] });
    }

    function sort(array, start, end) {
      if (start >= end) return;

      const mid = Math.floor((start + end) / 2);
      sort(array, start, mid);
      sort(array, mid + 1, end);
      merge(array, start, mid, end);
    }

    sort(aux, 0, aux.length - 1);
    return snapshots;
  }

  // Animate through all snapshot states to show sorting
  function animateSnapshots(snapshots) {
    if (snapshots.length === 0) return;
    let idx = 0;
    setIsAnimating(true);

    intervalRef.current = setInterval(() => {
      if (idx >= snapshots.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setSelectedBar([]);
        // Set the original array to final snapshot's array to keep sorted state
        setArray(snapshots[snapshots.length - 1].array);
        setWorkingArray(snapshots[snapshots.length - 1].array);
        return;
      }
      const snapshot = snapshots[idx];
      setWorkingArray(snapshot.array);
      setSelectedBar(snapshot.selected);
      idx++;
    }, speed);
  }

  function stopAnimation() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(false);
    setSelectedBar([]);
    setWorkingArray([...array]);
  }

  function play() {
    const snapshots = mergeSortSnapshots(array);
    animateSnapshots(snapshots);
  }

  function showArray(arr) {
    return arr.map((value, index) => (
      <SelectionSortBar
        key={index}
        height={value * 100 + "%"}
        value={Math.floor(value * 100)}
        selected={selectedBar.includes(index)}
      />
    ));
  }

  useEffect(() => {
    init();
  }, [barCount]);

  return (
    <ElevatedCard className={"flex flex-col"}>
      <div className="text-title-large flex items-center justify-between">
        <h2>Merge Sort</h2>
        <CodeSnippet data={codeData.mergesort} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="relative flex h-[400px] items-end justify-between gap-0.5">
          {workingArray.length > 0 ? showArray(workingArray) : showArray(array)}
        </div>
        <IndexRow count={barCount} />
        <div className="flex flex-col p-2 mt-4">
          <label htmlFor="bars" className="text-label-medium">
            Bar count (5-{maxBars}):{" "}
            <span className="text-secondary font-medium">{barCount}</span>
          </label>
          <input
            type="range"
            id="bars"
            min={5}
            max={maxBars}
            step={1}
            onChange={(e) => setBarCount(Number(e.target.value))}
            value={barCount}
            className="bg-stone-700 slider rounded-full"
            disabled={isAnimating}
          />
          <label htmlFor="speed" className="text-label-medium mt-4">
            Speed:{" "}
            <span className="text-secondary font-medium">{speed} ms</span>
          </label>
          <input
            type="range"
            id="speed"
            min={50}
            max={1000}
            step={50}
            onChange={(e) => setSpeed(Number(e.target.value))}
            value={speed}
            className="bg-stone-700 slider rounded-full"
            disabled={isAnimating}
          />
        </div>
        <div className="flex items-center gap-4 mt-5 w-full">
          <TonalButton text="Randomize" disabled={isAnimating} onClick={init} />
          <StandardButtonS
            onClick={play}
            variant="primary"
            text="Play"
            className="flex-1"
            disabled={isAnimating}
          />
          <TonalButton
            text="Stop"
            disabled={!isAnimating}
            onClick={stopAnimation}
          />
        </div>
      </div>
    </ElevatedCard>
  );
}
