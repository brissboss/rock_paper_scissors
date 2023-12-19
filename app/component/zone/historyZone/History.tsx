import { useState, useEffect } from "react";

import { getGoodStorage } from "@/app/utils/localStorage"
import HistoryLine from "./HistoryLine";

type allData = {
    key: string,
    value: string | null,
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