import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fireworks from '@fireworks-js/react'


const MainContent = () => {
  return (
    <section>
      <h1>
        <span>
          🎇 Very Happy Diwali, to you and your family.
          Like Fireworks & Sweets, may days to come be filled with Happiness & ✨ Surprises.
        </span>
      </h1>
    </section>
  )
}


function App() {
  const [firework, setFirework] = useState(false)
  const [fireworkCount, setFireworkCount] = useState(1)

  const fireWorkOptv = {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 0,
    particles: 200,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 10,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    sound: {
      enabled: true,
      files: [
        './burst.wav',
        './long-burst.wav',
        './wistle-burst.wav'
      ],
      volume: {
        min: 3,
        max: 82,
      }
    },
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 60
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    },
  }

  const fireworkRef = useRef()

  const fireworkClick = () => {
    setFireworkCount(fireworkCount + 1)
    fireworkRef.current.launch(fireworkCount)
    fireworkRef.current.start()
  }

  return (
    <>
      <div className='container'>
        <div className="main">
          {
            firework && (<Fireworks
              ref={fireworkRef}
              options={fireWorkOptv}
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'fixed',
                background: '#000'
              }}
            />)
          }
        </div>
        {
          !firework && (
            <div className='content'>
              <MainContent />
              <button onClick={e => (setFirework(true))} onTouchStart={e => (setFirework(true))}>Starts🎆</button>
            </div>
          )
        }
        <div className="footer">
          <button onClick={e => (fireworkClick())} title='add custom fireworks'>🎇({fireworkCount})</button>
        </div>
      </div>
    </>
  )
}

export default App
