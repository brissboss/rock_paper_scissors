import { ReactNode } from "react"

import { choices } from "@/app/[lang]/utils/rules"
import ButtonPlayer from "@/app/[lang]/component/button/ButtonPlayer"

import { Dictionary } from '@/app/[lang]/dictionaries/interface'

type RuleModuleProps = {
    nameChalOne: string,
    nameChalTwo: string,

    chalOne: ReactNode,
    chalTwo: ReactNode,

    pronoun: [string, string]

    width: number

    dict: Dictionary
}

export default function RuleModule(props: RuleModuleProps) {


    return (
        <div 
            className="
                flex justify-center items-center space-x-5
                text-lg mb-10
            "
        >
            <div>{props.pronoun[0] ? props.pronoun[0] : 'la'}</div>
            <div>
                <ButtonPlayer
                    type={props.nameChalOne}
                    size={props.width}
                    color={choices[props.nameChalOne as keyof typeof choices] ? choices[props.nameChalOne as keyof typeof choices].color : '#fff'}
                    static
                >
                    {props.chalOne}
                </ButtonPlayer>
            </div>
            <div>
                {props.dict.rules.win} {props.pronoun[1] ? props.pronoun[1] : 'la'}
            </div>
            <div>
            <ButtonPlayer
                    type={props.nameChalTwo}
                    size={props.width}
                    color={choices[props.nameChalTwo as keyof typeof choices] ? choices[props.nameChalTwo as keyof typeof choices].color : '#fff'}
                    static
                >
                    {props.chalTwo}
                </ButtonPlayer>
            </div>
        </div>
    )
}
