
import { ReactNode } from 'react'

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

    const handleClick = () => {
        if (props.action)
            props.action(props.type)
    }

    return (
        <div 
            className={`
                duration-200 
                ${!props.static && 'hover:bg-red-200 cursor-pointer mb-8 mx-2.5'}
            `}
        >
            <div
                onClick={handleClick}
                className={`
                    flex justify-center items-center
                    
                    rounded-full
                    
                    bg-white 
                    shadow-lg

                    transition-all
                `}
                style={{
                    borderWidth: props.size / 10 + 'px',
                    borderColor: props.color,
                    width: props.size + 'px',
                    height: props.size + 'px',
                }
                }
            >
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}