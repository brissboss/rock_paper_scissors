import { ReactNode, RefObject } from 'react'

type ResultModuleProps = {
    children: ReactNode
    
    // leaf, rock or scissors
    type: string 

    // in px
    size: number
}

export default function ResultModule(props: ResultModuleProps) {
    const color = () => {
        switch (props.type) {
            case 'leaf':
                return '#FF3636'
            case 'rock':
                return '#FFC436'
            case 'scissors':
                return '#2DBE44'
            default:
                return 'red'
        }
    }
    
    return (
        <div
            className={`
                flex justify-center items-center
                
                rounded-full
                
                bg-white 
                shadow-lg

            `}
            style={{
                borderWidth: props.size / 10 + 'px',
                borderColor: color(),
                width: props.size + 'px',
                height: props.size + 'px',
            }
            }
        >
            <div>
                {props.children}
            </div>
        </div>
    )
}