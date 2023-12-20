'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import ZoneTemplate from "../ZoneTemplate"
import Title from "@/app/[lang]/component/text/Title"
import ButtonPrimary from "../../button/ButtonPrimary"
import History from "./History"

import { Dictionary } from '@/app/[lang]/dictionaries/interface'

type HistoryZoneProps = {
    keyHistory: number
    largeWidth?: boolean,
    otherStyleDiv?: string,

    backButton?: boolean

    dict: Dictionary
}

export default function HistoryZone(props: HistoryZoneProps) {
    const [keyClear, setKeyClear] = useState<number>(0);

    const router = useRouter()

    const clearLocalStorage = () => {
        localStorage.clear()
        setKeyClear(prevKey => prevKey + 1)
    }

    const backButton = () => {
        router.back()
    }

    return (
        <ZoneTemplate
            keyDiv={props.keyHistory}
            largeWidth={props.largeWidth}
            otherDivStyle={props.otherStyleDiv}
        >
            {props.backButton &&
                <div className="flex flex-col justify-center">
                    <ButtonPrimary name={props.dict.history.backButton} action={backButton} styleSup="bg-white text-black hover:bg-gray-100"/>
                </div>
            }
            <Title content={props.dict.history.title}/>
            <History key={keyClear} dict={props.dict}/>
            <div className="flex flex-col justify-center space-y-4 py-4">
                <ButtonPrimary name={props.dict.history.resetButton} action={() => clearLocalStorage()}/>
            </div>
        </ZoneTemplate>
    )
}