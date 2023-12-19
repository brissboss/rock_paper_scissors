import { ReactNode } from "react"

import { choices } from "@/app/utils/rules"
import ButtonPlayer from "@/app/component/button/ButtonPlayer"

type RuleModuleProps = {
    nameChalOne: string,
    nameChalTwo: string,

    chalOne: ReactNode,
    chalTwo: ReactNode,

    pronoun: [string, string]

    width: number
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
                gagne contre {props.pronoun[1] ? props.pronoun[1] : 'la'}
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
