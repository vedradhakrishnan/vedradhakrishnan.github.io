"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function PortfolioMenu() {
  const [startIndex, setStartIndex] = useState(0)

  // Updated portfolio entries with links
  const portfolioEntries = [
    { title: "GRASP Lab Research", link: "https://github.com/vedradhakrishnan/cartpole-knode-mpc" },
    { title: "Music Visualizer", link: "https://www.youtube.com/watch?v=bfnO4ZLSik0" },
    { title: "'Stoga Robotics", link: "https://stogarobotics.github.io/" },
    { title: "VRC Spin Up", link: "https://github.com/vedradhakrishnan/6121E-Spin-Up" },
    { title: "ChromeBuddy", link: "https://devpost.com/software/chromebuddy" },
    // { title: "Project Gamma", link: "https://example.com/gamma" },
  ]

  const scrollUp = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const scrollDown = () => {
    setStartIndex((prevIndex) =>
      Math.min(portfolioEntries.length - 3, prevIndex + 1)
    )
  }

  const visibleEntries = portfolioEntries.slice(startIndex, startIndex + 3)

  return (
    <div
      className="flex flex-col items-center w-[100%] h-[42vh] rounded-2xl p-6 shadow-lg justify-between"
      style={{
        backgroundColor: "rgba(48, 24, 64, 0.1)", // 10% opacity for container
      }}
    >
      {/* Up Button */}
      <button
        onClick={scrollUp}
        disabled={startIndex === 0}
        className={`text-white hover:text-red-500 transition-all ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronUp className="h-6 w-6" />
      </button>

      {/* Portfolio List */}
      <div className="flex-grow w-full my-4 overflow-hidden">
        <ul className="space-y-4">
          {visibleEntries.map((entry, index) => (
            <li key={index} className="text-center text-lg font-ticketing text-white py-4 px-6 rounded-md transition-all"
                style={{
                  backgroundColor: "rgba(43, 18, 54, 0.2)", // Set background with 20% opacity
                }}>
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400"
              >
                {entry.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Down Button */}
      <button
        onClick={scrollDown}
        disabled={startIndex >= portfolioEntries.length - 3}
        className={`text-white hover:text-red-500 transition-all ${
          startIndex >= portfolioEntries.length - 3
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </div>
  )
}
