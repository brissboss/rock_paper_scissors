import { useEffect, useState } from "react";

function wichWin(player: string, ai: string) {
    if (player === ai) return 2

    if ((player === 'rock' && ai === 'scissors') ||
        (player === 'scissors' && ai === 'leaf') ||
        (player === 'leaf' && ai === 'rock')
    )
        return 1
    
    return 0
}

type ResultZoneProps = {
    playerChoice: string
    aiChoice: string
}

export default function ResultZone(props: ResultZoneProps) {
    const Result = () => {

        switch (wichWin(props.playerChoice, props.aiChoice)) {
            case 0:
                return <p>Defeat</p>                
            case 1:
                return <p>Win</p>
            case 2:
                return <p>Equality</p>
            default:
                return null
        }
    }

    return (
        <div
            className="
                h-full w-[90%] xl-[w-50%]
                py-4
                flex flex-col justify-start items-center
            "
        >
            <div className="flex justify-between w-[50%]">
                <p>Vous: {props.playerChoice}</p>
                <p>AI: {props.aiChoice}</p>
            </div>
            <div>
                <Result/>
            </div>
        </div>
    )
}