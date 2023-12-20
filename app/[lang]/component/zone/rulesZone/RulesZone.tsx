import Image from "next/image"
import { useState, useEffect, useRef } from "react"

import ZoneTemplate from "../ZoneTemplate"
import Title from "@/app/[lang]/component/text/Title"
import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'
import RuleModule from "./RuleModule"

import { Dictionary } from '@/app/[lang]/dictionaries/interface'

type Props = {
    dict: Dictionary
}

export default function RulesZone(props: Props) {
    const [width, setWidth] = useState<number>(0)
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateSize = () => {
            if (divRef.current)
                setWidth(divRef.current.clientWidth / 9)
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return (
        <ZoneTemplate
            refDiv={divRef}
        >
            <Title content={props.dict.rules.title}/>
            <RuleModule
                dict={props.dict}
                nameChalOne="leaf"
                nameChalTwo="rock"
                chalOne={<Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>}
                chalTwo={<Image src={rock} alt={'rock'} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>}
                pronoun={[props.dict.rules.female, props.dict.rules.female]}
                width={width}
            />
            <RuleModule
                dict={props.dict}
                nameChalOne="rock"
                nameChalTwo="scissors"
                chalOne={<Image src={rock} alt={'rock'} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>}
                chalTwo={<Image src={scissors} alt={'scissors'} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>}
                pronoun={[props.dict.rules.female, props.dict.rules.male]}
                width={width}
            />
            <RuleModule
                dict={props.dict}
                nameChalOne="scissors"
                nameChalTwo="leaf"
                chalOne={<Image src={scissors} alt={'scissors'} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>}
                chalTwo={<Image src={leaf} alt={'leaf'} style={{width: width / 1.89, height: width / 1.89}} priority width={0} height={0}/>}
                pronoun={[props.dict.rules.male, props.dict.rules.female]}
                width={width}
            />
        </ZoneTemplate>
    )
}