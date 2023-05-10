import { useKeyboardControls } from '@react-three/drei'
import useGame from '../../stores/useGame'
import { useEffect, useRef } from 'react'
import { addEffect } from '@react-three/fiber'

export default function Interface() {
  // STATE

  const time = useRef()
  const restart = useGame((state) => state.restart)
  const start = useGame((state) => state.start)
  const phase = useGame((state) => state.phase)

  const forward = useKeyboardControls((state) => state.forward)
  const backward = useKeyboardControls((state) => state.backward)
  const leftward = useKeyboardControls((state) => state.leftward)
  const rightward = useKeyboardControls((state) => state.rightward)
  const jump = useKeyboardControls((state) => state.jump)

  // HANDLING THE TIME IN GAME
  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState()
      //console.log(state)
      let elapsedTime = 0

      if (state.phase === 'playing') elapsedTime = Date.now() - state.startTime
      else if (state.phase === 'ended')
        elapsedTime = state.endTime - state.startTime

      elapsedTime /= 1000
      elapsedTime = elapsedTime.toFixed(2)

      if (time.current) time.current.textContent = elapsedTime
    })

    // //Event Handler for starting the game
    // const startGameHandler = addEffect(() => {
    //   start()
    // })

    // //Event Handler for Finishing the game
    // const endGameHandler = () => {
    //   end()
    // }

    return () => {
      unsubscribeEffect()
      // startGameHandler()
      // endGameHandler()
    }
  }, [])

  return (
    <>
      <div className="interface">
        {/* Start Game */}
        {phase === 'explore' && (
          <>
            <button className="startGame" onClick={start}>
              Start the Game
            </button>

            <div ref={time} className="time">
              0.00
            </div>
          </>
        )}

        {/* Timer */}

        {/* Restart */}
        {phase === 'ended' && (
          <>
            <div className="restart" onClick={restart}>
              RESTART
            </div>
            <div ref={time} className="time">
              0.00
            </div>
            <button className="endGame" onClick={end}>
              Go back to portfolio
            </button>
          </>
        )}

        {/* Controls */}
        <div className="controls">
          <div className="raw">
            <div className={`key ${forward ? 'active' : ''}`}></div>
          </div>
          <div className="raw">
            <div className={`key ${leftward ? 'active' : ''}`}></div>
            <div className={`key ${backward ? 'active' : ''}`}></div>
            <div className={`key ${rightward ? 'active' : ''}`}></div>
          </div>
          <div className="raw">
            <div className={`key large ${jump ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}
