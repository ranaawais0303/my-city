import React, { useEffect, useState } from "react";
import "./Rainy.css"; // Import your CSS file

const nbDrop = 858; // Number of drops

const Rainy = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    createRain(); // Initialize rain on component mount
  }, []);

  // Function to generate a random number range
  const randRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  // Function to create rain drops
  const createRain = () => {
    const newDrops = Array.from({ length: nbDrop }, (_, i) => ({
      id: i + 1,
      left: randRange(0, 1600),
      top: randRange(-1000, 1400),
    }));
    setDrops(newDrops);
  };

  return (
    <section className="rain-container">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="drop"
          style={{ left: drop.left, top: drop.top }}
        />
      ))}
    </section>
  );
};

export default Rainy;
