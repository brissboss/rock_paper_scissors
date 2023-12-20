'use client'

import { useEffect, useRef, useState } from "react"
import Image from 'next/image'

import { choices } from '@/app/[lang]/utils/rules'
import ButtonPlayer from "@/app/[lang]/component/button/ButtonPlayer"

type GameZoneUSerProps = {
    selectChoice: Function,
}

export default function GameZoneUSer(props: GameZoneUSerProps) {
    const [width, setWidth] = useState<number>(0);
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current)
                setWidth(divRef.current.clientWidth / 6)
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
                    flex justify-between items-end
                    w-[90%] xl:w-[60%] h-[30%]
                    pt-10
                "
        >
            <div
                className="
                    flex flex-wrap items-center justify-center
                    h-full w-full 
                    px-4
                    overflow-auto
                "
            >
                {Object.values(choices).map((item, index) => {
                    return (
                        <ButtonPlayer
                            type={item.name}
                            size={width < 100 ? 80 : width}
                            color={item.color}
                            action={(choice: string) => sendChoice(choice)}
                            key={index}
                        >
                            <Image src={item.image} alt={item.name} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>
                        </ButtonPlayer>
                    )
                })}
            </div>
        </div>
    )
}