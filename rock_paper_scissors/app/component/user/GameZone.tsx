'use client'

import ButtonPlayer from "@/app/component/button/ButtonPlayer"
import { useEffect, useRef, useState } from "react"

export default function GameZoneUSer() {
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
                action={console.log}
            />
            <ButtonPlayer
                type="rock"
                size={width / 3.2}
                action={console.log}
            />
            <ButtonPlayer
                type="scissors"
                size={width / 3.2}
                action={console.log}
            />
        </div>
    )
}