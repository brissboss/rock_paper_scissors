import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'

import ZoneTemplate from "./ZoneTemplate"
import { getGoodStorage } from "@/app/utils/getGoodStorage"
import wichWin from "@/app/utils/wichWin"
import ResultModule from "../ResultModule"
import Title from "../text/title"

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
        switch (choice) {
            case 'leaf':
                return <Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            case 'rock':
                return <Image src={rock} alt={'rock'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            case 'scissors':
                return <Image src={scissors} alt={'scissors'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            default:
                return <Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority/>
        }
    }

    return (
        <div
            ref={divRef}
            className="
                flex justify-between py-2
            "
        >
            <div className="flex justify-center items-center w-[33%]">
                <ResultModule
                    type={props.playerChoice}
                    size={width / 8}
                >
                    {imageResult(props.playerChoice)}
                </ResultModule>
            </div>
            <div className="flex justify-center items-center w-[33%]">
                {wichWin(props.playerChoice, props.aiChoice) === 1 && <p>Gagner</p>}
                {wichWin(props.playerChoice, props.aiChoice) === 0 && <p>Perdu</p>}
                {wichWin(props.playerChoice, props.aiChoice) === 2 && <p>Égalité</p>}
            </div>
            <div className="flex justify-center items-center w-[33%]">
                <ResultModule
                    type={props.aiChoice}
                    size={width / 8}                  
                >
                    {imageResult(props.aiChoice)}
                </ResultModule>
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
}

export default function HistoryZone(props: HistoryZoneProps) {
    return (
        <ZoneTemplate
            keyDiv={props.keyHistory}
        >
            <Title content="Historique"/>
                <div className="flex justify-between py-4">
                    <p className="w-[33%] text-center text-xl font-medium">Vous</p>
                    <p className="w-[33%] text-center text-xl font-medium">IA</p>
                </div>
            <History/>
        </ZoneTemplate>
    )
}