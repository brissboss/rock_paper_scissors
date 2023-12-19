import { useState } from "react"

import ZoneTemplate from "../ZoneTemplate"
import Title from "../../text/title"
import ButtonPrimary from "../../button/ButtonPrimary"
import History from "./History"

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