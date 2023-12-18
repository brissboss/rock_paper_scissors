import { ReactNode } from "react"
import Image from "next/image"

import Title from "../text/title"
import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'
import ResultModule from "../ResultModule"

type BeatProps = {
    nameChalOne: string,
    nameChalTwo: string,

    chalOne: ReactNode,
    chalTwo: ReactNode,

    pronoun: [string, string]
}

function Beat(props: BeatProps) {
    return (
        <div 
            className="
                flex justify-center items-center space-x-5 text-lg mb-10
            "
        >
            <div>{props.pronoun[0] ? props.pronoun[0] : 'la'}</div>
            <div>
                <ResultModule
                    type={props.nameChalOne}
                    size={256 / 4.5}
                >
                    {props.chalOne}
                </ResultModule>
            </div>
            <div>
                gagne contre {props.pronoun[1] ? props.pronoun[1] : 'la'}
            </div>
            <div>
                <ResultModule
                    type={props.nameChalTwo}
                    size={256 / 4.5}
                >
                    {props.chalTwo}
                </ResultModule>
            </div>
        </div>
    )
}

export default function RulesZone() {
    return (
        <div
            className="
                hidden 2xl:flex justify-center items-center
                w-[90%] lg:w-[25%]
                h-[100%]
                text-black
                pt-5
            "
        >
            <div
                className="
                    w-[80%]
                    h-full
                    rounded-md
                    px-4 py-2
                    border-[5px] border-white
                    overflow-auto
                    text-white
                    space-y-8
                "
            >
                <Title content="Règles"/>
                <Beat
                    nameChalOne="leaf"
                    nameChalTwo="rock"
                    chalOne={<Image src={leaf} alt={'leaf'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                    chalTwo={<Image src={rock} alt={'rock'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                    pronoun={['La', 'la']}
                />
                <Beat
                    nameChalOne="rock"
                    nameChalTwo="scissors"
                    chalOne={<Image src={rock} alt={'rock'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                    chalTwo={<Image src={scissors} alt={'scissors'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                    pronoun={['La', 'le']}
                />
                <Beat
                    nameChalOne="scissors"
                    nameChalTwo="rock"
                    chalOne={<Image src={scissors} alt={'scissors'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                    chalTwo={<Image src={rock} alt={'rock'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                    pronoun={['Le', 'la']}
                />
            </div>
        </div>
    )
}