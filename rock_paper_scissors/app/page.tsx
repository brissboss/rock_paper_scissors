'use client'

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

import GameZoneUSer from "./component/zone/GameZone"
import HistoryZone from "./component/zone/HistoryZone"
import RulesZone from "./component/zone/RulesZone"
import ResultZone from "./component/zone/result/DisplayResult"
import Result from "./component/zone/result/ResultZone"

export default function Home() {
    const [playerChoice, setPlayerChoice] = useState<string>("")
    const [aiChoice, setAiChoice] = useState<string>("")
    const [keyHistory, setKeyHistory] = useState<number>(0)

    const aiChoiceGenerator = () => {
        const choices = ['leaf', 'rock', 'scissors'];

        return choices[Math.floor(Math.random() * choices.length)]
    }

    const selectChoicePlayer = (choice: string) => {
        if (choice === 'leaf' || choice === 'rock' || choice === 'scissors') {
            const res = aiChoiceGenerator()
            localStorage.setItem('match-' + localStorage.length.toString(), choice + '/' + res)
            setPlayerChoice(choice)
            setAiChoice(res)
            setKeyHistory(prevKey => prevKey + 1)
        }
        else 
            console.error("The \"choice\" variable is incorrect\n", choice)
    }

    return (
        <div
            className="
                flex flex-col justify-between items-center 
                h-[100dvh] w-full

                relative
            "
        >
            <div
                className="
                    flex justify-center 2xl:justify-between
                    w-[90%] 2xl:w-[100%]
                    h-[65%]
                "
            >
                <RulesZone />
                <Result 
                    playerChoice={playerChoice}
                    aiChoice={aiChoice}
                />
                <HistoryZone keyHistory={keyHistory}/>
            </div>
            <GameZoneUSer selectChoice={(choice: string) => selectChoicePlayer(choice)} />
        </div>
    )
}
