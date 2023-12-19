'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import ZoneTemplate from "../ZoneTemplate"
import Title from "@/app/component/text/Title"
import ButtonPrimary from "../../button/ButtonPrimary"
import History from "./History"

type HistoryZoneProps = {
    keyHistory: number
    largeWidth?: boolean,
    otherStyleDiv?: string,

    backButton?: boolean
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
                    <ButtonPrimary name="Retour" action={backButton} styleSup="bg-white text-black hover:bg-gray-100"/>
                </div>
            }
            <Title content="Historique"/>
            <History key={keyClear}/>
            <div className="flex flex-col justify-center space-y-4 py-4">
                <ButtonPrimary name="Remettre à zéro" action={() => clearLocalStorage()}/>
            </div>
        </ZoneTemplate>
    )
}