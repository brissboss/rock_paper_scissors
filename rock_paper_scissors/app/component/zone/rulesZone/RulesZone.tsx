import Image from "next/image"

import ZoneTemplate from "../ZoneTemplate"
import Title from "../../text/title"
import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'
import RuleModule from "./RuleModule"


export default function RulesZone() {
    return (
        <ZoneTemplate>
            <Title content="Règles"/>
            <RuleModule
                nameChalOne="leaf"
                nameChalTwo="rock"
                chalOne={<Image src={leaf} alt={'leaf'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                chalTwo={<Image src={rock} alt={'rock'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                pronoun={['La', 'la']}
            />
            <RuleModule
                nameChalOne="rock"
                nameChalTwo="scissors"
                chalOne={<Image src={rock} alt={'rock'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                chalTwo={<Image src={scissors} alt={'scissors'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                pronoun={['La', 'le']}
            />
            <RuleModule
                nameChalOne="scissors"
                nameChalTwo="rock"
                chalOne={<Image src={scissors} alt={'scissors'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                chalTwo={<Image src={rock} alt={'rock'} style={{width: 256 / 1.89, height: 256 / 1.89}} priority/>}
                pronoun={['Le', 'la']}
            />
        </ZoneTemplate>
    )
}