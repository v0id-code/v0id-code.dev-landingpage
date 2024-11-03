'use client'

import { useEffect, useState } from 'react'

export default function Component() {
  const [text, setText] = useState('')
  const fullText = 'v0id-code'

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="text-4xl md:text-6xl text-white font-mono flex items-center">
        {text}<span className="animate-underline-blink">_</span>
        <span className="animate-blink">|</span>
      </div>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes shoot {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(300px, 300px);
            opacity: 0;
          }
        }
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          animation: shoot 3s linear infinite;
        }
        @keyframes underlineBlink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-underline-blink {
          animation: underlineBlink 1.5s step-end infinite;
        }
      `}</style>
    </div>
  )
}