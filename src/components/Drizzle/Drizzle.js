import React, { useEffect, useState } from "react";
import "./Drizzle.css"; // Import your CSS file
import Cloud from "../Cloud/Cloud";

const nbDrop = 300; // Number of drops for drizzle

const Drizzle = ({ day }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    createDrizzle(); // Initialize drizzle on component mount
  }, []);

  // Function to generate a random number range
  const randRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  // Function to create drizzle drops
  const createDrizzle = () => {
    const newDrops = Array.from({ length: nbDrop }, (_, i) => ({
      id: i + 1,
      left: randRange(0, window.innerWidth),
      top: randRange(-1000, window.innerHeight),
    }));
    setDrops(newDrops);
  };

  return (
    <section className="drizzle-container">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="drops"
          style={{ left: drop.left, top: drop.top }}
        />
      ))}
      {day && <Cloud />}
    </section>
  );
};

export default Drizzle;
