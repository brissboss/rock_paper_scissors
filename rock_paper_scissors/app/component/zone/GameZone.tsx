'use client'

import { useEffect, useRef, useState } from "react"
import Image from 'next/image'

import ButtonPlayer from "@/app/component/button/ButtonPlayer"
import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'

type GameZoneUSerProps = {
    selectChoice: Function,
}

export default function GameZoneUSer(props: GameZoneUSerProps) {
    const [width, setWidth] = useState<number>(0);
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current)
                setWidth(divRef.current.clientWidth / 3.2)
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
                    w-[90%] xl:w-[60%]

                    mb-5
                    h-[40%]
                "
        >
            <ButtonPlayer
                type="leaf"
                size={width}
                action={(choice: string) => sendChoice(choice)}
            >
                <Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            </ButtonPlayer>
            <ButtonPlayer
                type="rock"
                size={width}
                action={(choice: string) => sendChoice(choice)}
            >
                <Image src={rock} alt={'rock'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            </ButtonPlayer>
            <ButtonPlayer
                type="scissors"
                size={width}
                action={(choice: string) => sendChoice(choice)}
            >
                <Image src={scissors} alt={'scissors'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            </ButtonPlayer>
        </div>
    )
}