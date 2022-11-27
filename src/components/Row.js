import React from 'react'

export default function Row({ guess, currentGuess }) {

  if (guess) {
    return (
        <div classname="row past">
            {guess.map((l, i) => (
                <div key={i} classname={l.color}>{l.key}</div>
            ))}
        </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')
    return (
        <div className="row current">
            {letters.map((letters, i) => (
                <div key={i} className="filled">{letter} </div>
            ))}
            {[...Array(5 - letters.length)].map((_, i) => (
                <div key={i}></div>
            ) )}
        </div>
    )
  }

  return (
    <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
