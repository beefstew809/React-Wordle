import { useState } from 'react'

const useWordle = (solution) => {
    cont [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) //each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
 

    // format a guess into an array of letter objects
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // find any green letters
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key)
            formattedGuess[i].color = 'green'
            solutionArray[i] = null
        })

        // find any yellow colors
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess    
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess (whole word) is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            // Only add guess if turn < 5
            if (turn > 5) {
                return
            }
            // Do not allow duplicate words
            if (history.includes(currentGuess)) {
                console.log('You cannot guess the same word more than once')
                return
            }
            // Word must be 5 characters long
            if (currentGuess.length !== 5 ) {
                console.log('The word must be exactly 5 characters long')
                return
            }
            const formatted = formatGuess()
            addNewGuess(formattedGuess)

        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
        if (currentGuess.length < 5) {
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
      }
   }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle

