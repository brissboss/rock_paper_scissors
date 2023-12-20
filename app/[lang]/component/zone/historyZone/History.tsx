import { useState, useEffect } from "react";

import { getGoodStorage } from "@/app/[lang]/utils/localStorage"
import { getRatio, victory, defeat } from "@/app/[lang]/utils/rules";
import HistoryLine from "./HistoryLine";
import Stat from "./Stats";

import { Dictionary } from '@/app/[lang]/dictionaries/interface'

type allData = {
    key: string,
    value: string | null,
}

type Prop = {
    dict: Dictionary
}

export default function History(props: Prop) {
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
                <Stat title={props.dict.history.ratio} value={" : " + getRatio(allGames)}/>
                <Stat title={props.dict.history.victory} value={" : " + victory(allGames)}/>
                <Stat title={props.dict.history.defeat} value={" : " + defeat(allGames)}/>
            </div>
            <div className="flex justify-between py-4">
                <p className="w-[33%] text-center text-xl font-medium">{props.dict.history.you}</p>
                <p className="w-[33%] text-center text-xl font-medium">{props.dict.history.ai}</p>
            </div>
            {allGames.map((item, index) => {
                if (!item.value)
                    return
                return (
                    <div key={index}>
                        <HistoryLine playerChoice={item.value?.split('/')[0] || ''} aiChoice={item.value?.split('/')[1] || ''} dict={props.dict}/>
                    </div>
                )
            })}
        </div>
    )
}