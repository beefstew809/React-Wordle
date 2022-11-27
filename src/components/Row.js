import React from 'react'

export default function Row({ guess }) {

  if (guess) {
    return (
        <div classname="row past">
            {guess.map((l, i) => (
                <div key={i} classname={l.color}>{l.key}</div>
            ))}
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
