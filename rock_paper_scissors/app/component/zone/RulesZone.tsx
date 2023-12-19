import { ReactNode } from "react"
import Image from "next/image"

import ZoneTemplate from "./ZoneTemplate"
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
                flex justify-center items-center space-x-3 text-lg mb-10
            "
        >
            <div>{props.pronoun[0] ? props.pronoun[0] : 'la'}</div>
            <div>
                <ResultModule
                    type={props.nameChalOne}
                    size={256 / 5.8}
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
                    size={256 / 5.8}
                >
                    {props.chalTwo}
                </ResultModule>
            </div>
        </div>
    )
}

export default function RulesZone() {
    return (
        <ZoneTemplate>
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
        </ZoneTemplate>
    )
}