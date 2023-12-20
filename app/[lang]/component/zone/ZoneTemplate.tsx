import { ReactNode, RefObject } from "react"

type ZoneTemplateProps = {
    children: ReactNode,

    // for reload the div
    keyDiv?: number,

    refDiv?: RefObject<HTMLDivElement>

    // if true div will be displayed in mobile version
    largeWidth?: boolean,

    // replace the second div style by this
    otherDivStyle?: string
}

export default function ZoneTemplate(props: ZoneTemplateProps) {
    let divStyle = 'w-[80%] h-full rounded-md px-4 py-2 border-[5px] border-white overflow-auto text-white'

    if (props.otherDivStyle) 
        divStyle = props.otherDivStyle

    return (
        <div
            key={props.keyDiv}
            ref={props.refDiv}
            className={`
                ${props.largeWidth && 'flex flex-col justify-between items-center'}
                ${!props.largeWidth && 'hidden 2xl:flex justify-center items-center'}
                w-[90%] 2xl:w-[${props.largeWidth ? '50' : '25'}%] h-[100%]
                pt-5
                text-black
            `}
        >
            <div className={divStyle}>
                {props.children}
            </div>
        </div>
    )
}