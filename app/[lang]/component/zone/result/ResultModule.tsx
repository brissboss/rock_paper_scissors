import { ReactNode } from 'react'

type ResultModuleProps = {
    children: ReactNode
    
    // leaf, rock or scissors
    type: string 

    // in px
    size: number

    // 'left' or 'right'
    direction: string

    color: string
}

export default function ResultModule(props: ResultModuleProps) {
    return (
        <div
            className={`
                flex justify-center items-center
                ${props.direction === 'left' ? 'rounded-r-full' : 'rounded-l-full'}

                bg-white 
                shadow-lg
            `}
            style={{
                borderWidth: props.size / 10 + 'px',
                borderColor: props.color,
                height: props.size + 'px',
            }}
        >
            <div 
                className={`
                    flex ${props.direction === 'left' ? 'justify-end' : 'justify-start'} items-center
                    px-6 
                    w-full
                `}
            >
                {props.children}
            </div>
        </div>
    )
}