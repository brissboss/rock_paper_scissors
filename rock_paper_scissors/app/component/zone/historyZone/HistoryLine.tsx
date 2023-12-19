import { useState, useEffect, useRef } from "react";
import Image from "next/image"

import { choices, wichWin } from "@/app/utils/rules"
import ButtonPlayer from "../../button/ButtonPlayer"

type HistoryLineProps = {
    playerChoice: string,
    aiChoice: string,
}

export default function HistoryLine(props: HistoryLineProps) {
    const [width, setWidth] = useState<number>(0)
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current)
                setWidth(divRef.current.clientWidth)
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)

    }, [])

    const imageResult = (choice: string) => {
        if (choice in choices) {
            const choiceItem = choices[choice as keyof typeof choices]

            return <Image src={choiceItem.image} alt={choice} width={0} height={0} style={{ width: width / 1.89, height: width / 1.89 }} priority />
        }
        else {
            return <div className="text-red-500">Error</div>
        }
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
                    size={width / 8}
                    color={choices[props.playerChoice as keyof typeof choices] ? choices[props.playerChoice as keyof typeof choices].color : '#fff'}
                    static
                >
                    {imageResult(props.playerChoice)}
                </ButtonPlayer>
            </div>
            <div className="flex justify-center items-center w-[33%]">
                {wichWin(props.playerChoice, props.aiChoice) === 1 && <p>Gagner</p>}
                {wichWin(props.playerChoice, props.aiChoice) === 0 && <p>Perdu</p>}
                {wichWin(props.playerChoice, props.aiChoice) === 2 && <p>Égalité</p>}
            </div>
            <div className="flex justify-center items-center w-[33%]">
                <ButtonPlayer
                    type={props.aiChoice}
                    size={width / 8}
                    color={choices[props.aiChoice as keyof typeof choices] ? choices[props.aiChoice as keyof typeof choices].color : '#fff'}
                    static
                >
                    {imageResult(props.aiChoice)}
                </ButtonPlayer>
            </div>
        </div>
    )
}