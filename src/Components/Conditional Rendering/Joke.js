import React from 'react'
export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false);

    // Use double ampersand if you want either display or not display
    // Use ternary if you want to choose between one of two things to display
    return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        <button onClick={() => setIsShown(prevShown => !prevShown)}>{isShown ? "Hide Punchline" : "Show Punchline" } </button>
    </div>
  )
}
