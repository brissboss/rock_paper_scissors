import { useState, useEffect, useRef } from "react";
import Image from "next/image"

import { choices, wichWin } from "@/app/[lang]/utils/rules"
import ButtonPlayer from "../../button/ButtonPlayer"
import { Dictionary } from '@/app/[lang]/dictionaries/interface'

type HistoryLineProps = {
    playerChoice: string,
    aiChoice: string,
    dict: Dictionary
}

export default function HistoryLine(props: HistoryLineProps) {
    const [width, setWidth] = useState<number>(0)
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current)
                setWidth(divRef.current.clientWidth / 6)
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    const imageResult = (choice: string) => {
        if (choice in choices)
            return <Image src={choices[choice as keyof typeof choices].image} alt={choice} style={{ width: width / 1.89, height: width / 1.89 }} priority width={0} height={0}/>
        else 
            return <div className="text-red-500">Error</div>
    }

    return (
        <div
            ref={divRef}
            className="
                flex justify-between py-2
                text-base sm:text-3xl 2xl:text-base
            "
        >
            <div className="flex justify-center items-center w-[33%]">
                <ButtonPlayer
                    type={props.playerChoice}
                    size={width}
                    color={choices[props.playerChoice as keyof typeof choices] ? choices[props.playerChoice as keyof typeof choices].color : '#fff'}
                    static
                >
                    {imageResult(props.playerChoice)}
                </ButtonPlayer>
            </div>
            <div className="flex justify-center items-center w-[33%]">
                {wichWin(props.playerChoice, props.aiChoice) === 0 && <p>{props.dict.history.defeating}</p>}
                {wichWin(props.playerChoice, props.aiChoice) === 1 && <p>{props.dict.history.winning}</p>}
                {wichWin(props.playerChoice, props.aiChoice) === 2 && <p>{props.dict.history.equality}</p>}
            </div>
            <div className="flex justify-center items-center w-[33%]">
                <ButtonPlayer
                    type={props.aiChoice}
                    size={width}
                    color={choices[props.aiChoice as keyof typeof choices] ? choices[props.aiChoice as keyof typeof choices].color : '#fff'}
                    static
                >
                    {imageResult(props.aiChoice)}
                </ButtonPlayer>
            </div>
        </div>
    )
}