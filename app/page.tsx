'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import GameZoneUSer from "./component/zone/gameZone/GameZone"
import HistoryZone from "./component/zone/historyZone/HistoryZone"
import RulesZone from "./component/zone/rulesZone/RulesZone"
import Result from "./component/zone/result/ResultZone"
import NewGameZone from "./component/zone/NewGameZone"
import ButtonPrimary from "./component/button/ButtonPrimary"

import { choices } from "./utils/rules"

export default function Home() {
    const [openResult, setOpenResult] = useState<boolean>(false)
    const [playerChoice, setPlayerChoice] = useState<string>("")
    const [aiChoice, setAiChoice] = useState<string>('')
    const [keyHistory, setKeyHistory] = useState<number>(0)

    const router = useRouter()

    const aiChoiceGenerator = () => {
        const keys = Object.keys(choices) as Array<keyof typeof choices>;
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return choices[randomKey].name;
        
    }

    const selectChoicePlayer = (choice: string) => {
        if (Object.values(choices).map((item) => item.name.includes(choice))) {
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

    const openHistory = () => {
        router.push('/history')
    }

    return (
        <div
            className="
                flex flex-col justify-between items-center 
                h-[100dvh] w-full

                overflow-hidden
                relative
            "
        >
            <div className="2xl:hidden pt-4">
                <ButtonPrimary name="Historique" action={() => openHistory()}/>
            </div>
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
                <div 
                    className="
                        flex justify-center items-center
                        w-full h-[30%]
                    "
                >
                    <ButtonPrimary name="Rejouer ?" action={() => replay()}/>
                </div>
            }
        </div>
    )
}
