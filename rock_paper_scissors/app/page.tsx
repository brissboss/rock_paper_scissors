'use client'

import { useState } from "react"

import GameZoneUSer from "./component/zone/GameZone"
import HistoryZone from "./component/zone/HistoryZone"
import RulesZone from "./component/zone/RulesZone"
import Result from "./component/zone/result/ResultZone"
import NewGameZone from "./component/zone/NewGameZone"

export default function Home() {
    const [openResult, setOpenResult] = useState<boolean>(false)
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
            setOpenResult(true)
        }
        else 
            console.error("The \"choice\" variable is incorrect\n", choice)
    }

    const replay = () => {
        setOpenResult(false)
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
                {!openResult ? 
                    <NewGameZone/>
                    :
                    <Result 
                        playerChoice={playerChoice}
                        aiChoice={aiChoice}
                    />
                }
                <HistoryZone keyHistory={keyHistory}/>
            </div>
            {!openResult ?
                <GameZoneUSer selectChoice={(choice: string) => selectChoicePlayer(choice)} />
                :
                <div onClick={() => replay()} className="bg-red-500 px-2 py-1 mb-10 rounded-md cursor-pointer">Rejouer ?</div>
            }
        </div>
    )
}
