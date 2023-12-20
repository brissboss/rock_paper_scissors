'use client'

import ZoneTemplate from "../ZoneTemplate"
import ResultZone from "./DisplayResult"
import { Dictionary } from "@/app/[lang]/dictionaries/interface"

type ResultProps = {
    playerChoice: string,
    aiChoice: string,

    dict: Dictionary
}

export default function Result(props: ResultProps) {
    return (
        <ZoneTemplate
            largeWidth
            otherDivStyle="
                flex flex-col justify-between items-center
                w-[100%]
                h-full
                rounded-md
                py-2
                overflow-auto
                text-white
                border-[5px] border-white
            "    
        >
            <ResultZone playerChoice={props.playerChoice} aiChoice={props.aiChoice} dict={props.dict}/>
        </ZoneTemplate>
    )
}