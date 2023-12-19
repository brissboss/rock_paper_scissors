import { ReactNode } from "react"

type ZoneTemplateProps = {
    children: ReactNode,

    keyDiv?: number

    largeWidth?: boolean

    otherDivStyle?: string
}

export default function ZoneTemplate(props: ZoneTemplateProps) {
    let divStyle = 'w-[80%] h-full rounded-md px-4 py-2 border-[5px] border-white overflow-auto text-white'

    if (props.otherDivStyle)
        divStyle = props.otherDivStyle

    return (
        <div
            key={props.keyDiv}
            className={`
                ${props.largeWidth && 'flex flex-col justify-between items-center'}
                ${!props.largeWidth && 'hidden 2xl:flex justify-center items-center'}
                w-[90%] 2xl:w-[${props.largeWidth ? '50' : '25'}%]
                h-[100%]
                text-black
                pt-5
            `}
        >
            <div
                className={divStyle}
            >
                {props.children}
            </div>
        </div>
    )
}