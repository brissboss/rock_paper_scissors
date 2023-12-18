'use client'

import ButtonPlayer from "@/app/component/button/ButtonPlayer"
import { useEffect, useRef, useState } from "react"

type GameZoneUSerProps = {
    selectChoice: Function,
}

export default function GameZoneUSer(props: GameZoneUSerProps) {
    const [width, setWidth] = useState<number>(0);
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

    const sendChoice = (choice: string) => {
        props.selectChoice(choice)
    }

    return (
        <div
            ref={divRef}
            className="
                    flex justify-between items-center
                    w-[90%] xl:w-[50%]

                    mb-5
                "
        >
            <ButtonPlayer
                type="leaf"
                size={width / 3.2}
                action={() => sendChoice('leaf')}
            />
            <ButtonPlayer
                type="rock"
                size={width / 3.2}
                action={() => sendChoice('rock')}
            />
            <ButtonPlayer
                type="scissors"
                size={width / 3.2}
                action={() => sendChoice('scissors')}
            />
        </div>
    )
}