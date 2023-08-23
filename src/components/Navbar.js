import React, { useEffect, useState } from "react";
import SortingVisualizer from "./SortingVisualizer";
import "../style/Navbar.css";
import { mergeSort } from "./Algorithms/MergeSort.js";
import { quickSort } from "./Algorithms/QuickSort.js";
import { selectionSort } from "./Algorithms/SelectionSort.js";
import { bubbleSort } from "./Algorithms/BubbleSort.js";
import { insertionSort } from "./Algorithms/InsertionSort.js";

const Navbar = () => {
  const [arraySize, setArraySize] = useState(15);
  const [arr, setarr] = useState([]);

  useEffect(() => {
    generateRandomValues();
  }, [arraySize]);

  const generateRandomValues = () => {
    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push(randomIntFromInterval(5, 630));
    }
    setarr(arr);
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleSliderChange = (event) => {
    const newSize = parseInt(event.target.value);
    setArraySize(newSize);
  };

  const handleMergeSort = () => {
    const animations = [];
    const sortedArray = arr.slice();
    mergeSort(sortedArray, 0, sortedArray.length - 1, animations);
    let ans = arr.slice();
    animateMergeSorting(ans, animations);
  };
  const animateMergeSorting = (ans, animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [barIndex, newHeight] = animations[i];

      setTimeout(() => {
        let newArray = arr.slice();
        ans[barIndex] = newHeight;
        newArray[barIndex] = newHeight;

        setarr(newArray);
        for (let i = 0; i < ans.length; i++) {
          arr[i] = ans[i];
        }
      }, i * 10);
    }
  };

  const handleQuickSort = () => {
    const animations = [];
    const sortedArray = arr.slice(); // create copy arr.slice()
    quickSort(sortedArray, 0, sortedArray.length - 1, animations);
    console.log("befor", arr);
    console.log("sorted:", animations);
    let ans = arr.slice();
    animateQuickSorting(ans, animations);
  };
  const animateQuickSorting = (ans, animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [currentIndex, swapIndex] = animations[i];

      setTimeout(() => {
        let newArray = arr.slice();
        [newArray[currentIndex], newArray[swapIndex]] = [
          newArray[swapIndex],
          newArray[currentIndex],
        ];
        [ans[currentIndex], ans[swapIndex]] = [
          ans[swapIndex],
          ans[currentIndex],
        ];

        setarr(newArray);

        for (let i = 0; i < ans.length; i++) {
          arr[i] = ans[i];
        }
      }, i * 10);
    }
  };
  const handleSelectionSort = () => {
    // const sortedArray = selectionSort(arr.slice()); // create copy arr.slice()

    const animations = [];
    const sortedArray = arr.slice();
    selectionSort(sortedArray, animations);
    console.log("sorted:", sortedArray);
    // setarr(sortedArray);
    let ans = arr.slice();
    animateSelectionSorting(ans, animations);
  };
  const animateSelectionSorting = (ans, animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [currentIndex, minIndex] = animations[i];
      console.log(animations[i]);

      setTimeout(() => {
        let newArray = arr.slice();

        [newArray[currentIndex], newArray[minIndex]] = [
          newArray[minIndex],
          newArray[currentIndex],
        ];
        [ans[currentIndex], ans[minIndex]] = [ans[minIndex], ans[currentIndex]];

        setarr(newArray);

        for (let i = 0; i < ans.length; i++) {
          arr[i] = ans[i];
        }
      }, i * 10);
    }
  };

  const handleBubbleSort = () => {
    // const sortedArray = bubbleSort(arr.slice()); // create copy arr.slice()

    const animations = [];
    const sortedArray = arr.slice();
    bubbleSort(sortedArray, animations);
    console.log("sorted:", sortedArray);
    // setarr(sortedArray);
    let ans = arr.slice();
    animateBubbleSorting(ans, animations);
  };
  const animateBubbleSorting = (ans, animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [currentIndex, nextIndex] = animations[i];

      setTimeout(() => {
        let newArray = arr.slice();
        [newArray[currentIndex], newArray[nextIndex]] = [
          newArray[nextIndex],
          newArray[currentIndex],
        ];
        [ans[currentIndex], ans[nextIndex]] = [
          ans[nextIndex],
          ans[currentIndex],
        ];
        setarr(newArray);
        for (let i = 0; i < ans.length; i++) {
          arr[i] = ans[i];
        }
      }, i * 10);
    }
  };

  const handleInsertionSort = () => {
    // const sortedArray = insertionSort(arr.slice()); // create copy arr.slice()
    const animations = [];
    const sortedArray = arr.slice();
    insertionSort(sortedArray, animations);
    console.log("sorted:", sortedArray);
    // setarr(sortedArray);
    let ans = arr.slice();
    animateInsertionSorting(ans, animations);
  };
  const animateInsertionSorting = (ans, animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [currentIndex, shiftIndex] = animations[i];

      setTimeout(() => {
        let newArray = arr.slice();
        const valueToInsert = newArray[currentIndex];
        newArray.splice(currentIndex, 1);
        newArray.splice(shiftIndex, 0, valueToInsert);

        const valueToInsert1 = ans[currentIndex];
        ans.splice(currentIndex, 1);
        ans.splice(shiftIndex, 0, valueToInsert1);

        setarr(newArray);

        for (let i = 0; i < ans.length; i++) {
          arr[i] = ans[i];
        }
      }, i * 10);
    }
  };

  return (
    <>
      <div className="Navbar">
        <div className="Random">
          <div>
            <button onClick={generateRandomValues}>GenerateRandomValues</button>
          </div>
        </div>

        <div className="slidecontainer">
          <span>size:{arraySize}</span>
          <input
            type="range"
            min="5"
            max="100"
            value={arraySize}
            onChange={handleSliderChange}
            id="myRange"
          />
        </div>

        <div className="Nav-sorting">
          <div>
            <button onClick={handleMergeSort}>MergeSort</button>
          </div>
          <div>
            <button onClick={handleQuickSort}>QuickSort</button>
          </div>
          <div>
            <button onClick={handleSelectionSort}>SelectionSort</button>
          </div>
          <div>
            <button onClick={handleBubbleSort}>BubbleSort</button>
          </div>
          <div>
            <button onClick={handleInsertionSort}>InsertionSort</button>
          </div>
        </div>
      </div>

      <div>
        <SortingVisualizer dataArray={arr} />
      </div>
    </>
  );
};

export default Navbar;
