'use client'

import { useState } from "react"
import GameZoneUSer from "./component/zone/GameZone"
import ResultZone from "./component/zone/ResultZone"

export default function Home() {
    const [playerChoice, setPlayerChoice] = useState<string>('')
    const [aiChoice, setAiChoice] = useState<string>('')

    const aiChoiceGenerator = () => {
        const choices = ['leaf', 'rock', 'scissors'];

        return choices[Math.floor(Math.random() * choices.length)]
    }

    const selectChoicePlayer = (choice: string) => {
        if (choice === 'leaf' || choice === 'rock' || choice === 'scissors') {
            setPlayerChoice(choice);
            setAiChoice(aiChoiceGenerator())
        }
        else 
            console.error("The \"choice\" variable is incorrect\n", choice)
    }

    return (
        <div
            className="
                flex flex-col justify-end items-center 
                h-[100dvh] w-full
            "
        >
            <ResultZone playerChoice={playerChoice} aiChoice={aiChoice}/>
            <GameZoneUSer selectChoice={(choice: string) => selectChoicePlayer(choice)}/>
        </div>
    )
}
