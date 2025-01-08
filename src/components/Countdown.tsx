import { useState, useEffect } from 'react'
import { calculateYearProgress, getDaysLeft } from '../utils/ProgressCalculator';

export function Countdown() {
  const [progress, setProgress] = useState(0)
  const [daysLeft, setDaysLeft] = useState(0)
console.log(progress, daysLeft);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(calculateYearProgress(2025))
      setDaysLeft(getDaysLeft(2025))
    }
    updateProgress()
    const timer = setInterval(updateProgress, 1000 * 60 * 60) // Update every hour
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-8 animate-pulse" style={{ textShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 30px #3B82F6' }}>
          2025 Progress
        </h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
            hi
          <svg className="w-full h-full" viewBox="0 0 100 100">
            hii
            <circle
              className="text-gray-800 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-blue-500 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (progress / 100) * 251.2}
              transform="rotate(-90 50 50)"
              style={{ filter: 'drop-shadow(0 0 8px #3B82F6)' }}
            ></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-blue-500" style={{ textShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6' }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <p className="text-2xl text-blue-400 mb-4" style={{ textShadow: '0 0 10px #60A5FA, 0 0 20px #60A5FA' }}>
          {daysLeft} days left in 2025
        </p>
        <p className="text-lg text-purple-400" style={{ textShadow: '0 0 5px #A78BFA, 0 0 10px #A78BFA' }}>
          Embrace the future, one day at a time
        </p>
      </div>
    </div>
  )
}

