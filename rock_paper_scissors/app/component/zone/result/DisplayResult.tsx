import { useEffect, useState, useRef } from "react"; 
import Image from 'next/image'

import ResultModule from "../../ResultModule";
import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'


function wichWin(player: string, ai: string) {
    if (player === ai) 
        return 2

    if ((player === 'rock' && ai === 'scissors') ||
        (player === 'scissors' && ai === 'leaf') ||
        (player === 'leaf' && ai === 'rock')
    ) {
        return 1
    }
    
    return 0
}

type ResultZoneProps = {
    playerChoice: string
    aiChoice: string
}

export default function ResultZone(props: ResultZoneProps) {
    console.log(props.playerChoice, props.aiChoice)

    const [width, setWidth] = useState<number>(0);
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current) {
                setWidth(divRef.current.clientWidth / 3.2)
            }
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    const imageUser = (choice: string) => {
        switch (choice) {
            case 'leaf':
                return <Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            case 'rock':
                return <Image src={rock} alt={'rock'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            case 'scissors':
                return <Image src={scissors} alt={'scissors'} style={{width: width / 1.89, height: width / 1.89}} priority/>
            default:
                return <Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority/>
        }
    }

    const Result = () => {

        switch (wichWin(props.playerChoice, props.aiChoice)) {
            case 0:
                return <p>Defeat</p>                
            case 1:
                return <p>Win</p>
            case 2:
                return <p>Equality</p>
            default:
                return null
        }
    }

    return (
        <div
            className="
                w-1/2 h-1/2
                py-4
                flex flex-col justify-center items-center
            "
        >
            <div 
                ref={divRef}
                className="
                    flex justify-between 
                    w-[90%] xl:w-[60%]
                    h-full
                "
            >
                <div 
                    className="
                        w-full flex justify-center items-start mt-[10%]

                    "
                >
                    <ResultModule
                        type={props.playerChoice}
                        size={width}
                    >
                        {imageUser(props.playerChoice)}
                    </ResultModule>
                </div>
                <div
                    className="bg-white w-[10px] h-full rotate-45 rounded-full"
                ></div>
                <div
                    className="
                        w-full flex justify-center items-end mb-[10%]

                    "
                >
                    <ResultModule
                        type={props.aiChoice}
                        size={width}
                    >
                        {imageUser(props.aiChoice)}
                    </ResultModule>
                </div>
            </div>
            <div
                className="
                "
            >
                <Result/>
            </div>
        </div>
    )
}