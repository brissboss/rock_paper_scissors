import { useState, useEffect } from "react";

import { getGoodStorage } from "@/app/utils/localStorage"
import { getRatio, victory, defeat } from "@/app/utils/rules";
import HistoryLine from "./HistoryLine";

type allData = {
    key: string,
    value: string | null,
}

type StatProps = {
    title: string,
    value: string
}

function Stat(props: StatProps) {
    return (
        <div className="flex justify-between">
            <p className="w-[50%]">
                {props.title}
            </p>
            <p className="w-[50%]">
                {props.value}
            </p>
        </div>
    )
}

export default function History() {
    const [allGames, setAllGames] = useState<allData[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const goodStorage = getGoodStorage().sort((a, b) => parseInt(b.key.split('-')[1]) - parseInt(a.key.split('-')[1]));
            setAllGames(goodStorage)
        }
    }, [])

    return (
        <div >
            <div>
                <Stat title="Ratio V/D" value={" : " + getRatio(allGames)}/>
                <Stat title="Victoire" value={" : " + victory(allGames)}/>
                <Stat title="Défaite" value={" : " + defeat(allGames)}/>
            </div>
            <div className="flex justify-between py-4">
                <p className="w-[33%] text-center text-xl font-medium">Vous</p>
                <p className="w-[33%] text-center text-xl font-medium">IA</p>
            </div>
            {allGames.map((item, index) => {
                if (!item.value)
                    return
                return (
                    <div key={index}>
                        <HistoryLine playerChoice={item.value?.split('/')[0] || ''} aiChoice={item.value?.split('/')[1] || ''} />
                    </div>
                )
            })}
        </div>
    )
}