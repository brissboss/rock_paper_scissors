'use client'

import ResultZone from "./DisplayResult"

type ResultProps = {
    playerChoice: string,
    aiChoice: string,
}

export default function Result(props: ResultProps) {
    return (
        <div

            className="
                flex justify-center items-center
                w-[90%] 2xl:w-[50%]
                h-[100%]
                text-black
                pt-5
            "
        >
            <div
                className="
                    w-[100%]
                    h-full
                    rounded-md
                    px-4 py-2
                    overflow-auto
                    text-white
                "
            >
                <ResultZone playerChoice={props.playerChoice} aiChoice={props.aiChoice} />
                <div className="bg-red-500 cursor-pointer hover:bg-red-800" onClick={() => console.log}>Replay</div>
            </div>
        </div>

    )
}