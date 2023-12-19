import { ReactNode, useState } from 'react'

type ButtonPlayerProps = {
    children: ReactNode
    
    // leaf, rock or scissors
    type: string 

    // in px
    size: number

    color: string

    action?: Function

    static?: boolean
}

export default function ButtonPlayer(props: ButtonPlayerProps) {
    const [mouseIn, setMouseIn] = useState<boolean>(false)

    const mouseEnter = () => {
        if (!props.static)
            setMouseIn(!mouseIn)
    }

    const handleClick = () => {
        if (props.action)
            props.action(props.type)
    }

    const style = {
        borderWidth: props.size / 10 + 'px',
        borderColor: props.color,
        width: props.size + 'px',
        height: props.size + 'px',
    }

    const shadow = !mouseIn ? { boxShadow: '0px 0px 0px 0px #000' } : { backgroundColor: props.color }

    return (
        <div 
            className={`
                ${!props.static && 'mb-8 mx-2.5'}
            `}
        >
            <div
                onClick={handleClick}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseEnter}
                className={`
                    flex justify-center items-center
                    
                    rounded-full
                    
                    bg-white 

                    transition-all duration-200
                    ${!props.static && 'cursor-pointer'}
                `}
                style={{...style, ...shadow}}
            >
                {props.children}
            </div>
        </div>
    )
}