import { useEffect, useState, useRef } from "react"; 
import Image from 'next/image'

import ResultModule from "./ResultModule";
import { choices, wichWin } from "@/app/[lang]/utils/rules";
import { Dictionary } from "@/app/[lang]/dictionaries/interface"

type ResultZoneProps = {
    playerChoice: string
    aiChoice: string

    dict: Dictionary
}

export default function ResultZone(props: ResultZoneProps) {
    const [width, setWidth] = useState<number>(0)

    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current) {
                if (window.innerWidth > 760 && window.innerWidth < 1535)
                    setWidth(divRef.current.clientWidth / 6)
                else
                    setWidth(divRef.current.clientWidth / 3.2)
            }
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    const imageUser = (choice: string) => {
        if (choice in choices)
            return <Image src={choices[choice as keyof typeof choices].image} alt={choice} width={0} height={0} style={{width: width / 1.89, height: width / 1.89}} priority/>
        else 
            return <div className="text-red-500">Error</div>
    }

    const GetTitle = () => {
        switch (wichWin(props.playerChoice, props.aiChoice)) {
            case 0:
                return <p className="text-[#FF3636]">{props.dict.history.defeating}</p>                
            case 1:
                return <p className="text-[#2DBE44]">{props.dict.history.winning}</p>
            case 2:
                return <p className="text-[#FFC436]">{props.dict.history.equality}</p>
            default:
                return <p className="text-[#FF3636]">ERROR</p>
        }
    }

    return (
        <div
            className="
                w-full h-full
                flex flex-col justify-center items-center
                relative
                overflow-hidden
            "
        >
            <div 
                ref={divRef}
                className="
                    flex flex-col justify-start 
                    w-[90%] xl:w-[60%] h-full
                "
            >
                <div 
                    className="
                        flex justify-center items-center
                        h-1/3
                        text-[3rem] lg:text-[5rem]
                        animate-text
                    "
                >
                    <GetTitle/>
                </div>

                <div
                    className="
                        absolute top-1/3 left-0
                        w-2/3

                        animate-slide-in-left
                    "
                >
                    <ResultModule
                        type={props.playerChoice}
                        size={width}
                        color={choices[props.playerChoice as keyof typeof choices] ? choices[props.playerChoice as keyof typeof choices].color : '#fff'}
                        direction="left"
                    >
                        {imageUser(props.playerChoice)}
                    </ResultModule>
                </div>
                <div
                    className="
                        absolute top-2/3 right-0
                        w-2/3

                        animate-slide-in-right
                    "
                >
                    <ResultModule
                        type={props.aiChoice}
                        size={width}
                        color={choices[props.aiChoice as keyof typeof choices] ? choices[props.aiChoice as keyof typeof choices].color : '#fff'}
                        direction="right"
                    >
                        {imageUser(props.aiChoice)}
                    </ResultModule>
                </div>
            </div>
        </div>
    )
}