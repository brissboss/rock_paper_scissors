import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { choices , wichWin} from "@/app/utils/rules"
import ZoneTemplate from "./ZoneTemplate"
import { getGoodStorage } from "@/app/utils/localStorage"
import ResultModule from "../ResultModule"

import ButtonPlayer from "../button/ButtonPlayer"

import Title from "../text/title"
import ButtonPrimary from "../button/ButtonPrimary"

type HistoryLineProps = {
    playerChoice: string,
    aiChoice: string,
}

function HistoryLine(props: HistoryLineProps) {
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
    
            return <Image src={choiceItem.image} alt={choice} width={0} height={0} style={{width: width / 1.89, height: width / 1.89}} priority/>
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

type allData = {
    key: string,
    value: string | null,
}

function History() {
    const [allGames, setAllGames] = useState<allData[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const goodStorage = getGoodStorage().sort((a, b) => parseInt(b.key.split('-')[1]) - parseInt(a.key.split('-')[1]));
            setAllGames(goodStorage)
        }
    }, [])

    return (
        <div >
            {allGames.map((item, index) => {
                if (!item.value)
                    return
                return(
                    <div key={index}>
                       <HistoryLine playerChoice={item.value?.split('/')[0] || ''} aiChoice={item.value?.split('/')[1] || ''}/>
                    </div>
                )
            })}
        </div>
    )
}

type HistoryZoneProps = {
    keyHistory: number
    largeWidth?: boolean,
    otherStyleDiv?: string
}

export default function HistoryZone(props: HistoryZoneProps) {
    const [keyClear, setKeyClear] = useState<number>(0);

    const clearLocalStorage = () => {
        localStorage.clear()
        setKeyClear(prevKey => prevKey + 1)
    }

    return (
        <ZoneTemplate
            keyDiv={props.keyHistory}
            largeWidth={props.largeWidth}
            otherDivStyle={props.otherStyleDiv}
        >
            <Title content="Historique"/>
                <div className="flex justify-between py-4">
                    <p className="w-[33%] text-center text-xl font-medium">Vous</p>
                    <p className="w-[33%] text-center text-xl font-medium">IA</p>
                </div>
            <History key={keyClear}/>
            <div className="flex justify-center py-4">
                <ButtonPrimary name="Remetre a zéro" action={() => clearLocalStorage()}/>
            </div>
        </ZoneTemplate>
    )
}