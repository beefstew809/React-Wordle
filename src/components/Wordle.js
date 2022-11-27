import React from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './grid'

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])
  
  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }), [guesses, turn, isCorrect]

  return (
    <div>
        <div>Wordle</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
    </div>

  )
}
