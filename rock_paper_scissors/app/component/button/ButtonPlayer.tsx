
import { ReactNode } from 'react'

type ButtonPlayerProps = {
    children: ReactNode
    
    // leaf, rock or scissors
    type: string 

    // in px
    size: number

    action: Function
}

export default function ButtonPlayer(props: ButtonPlayerProps) {

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

    const handleClick = () => {
        props.action(props.type)
    }

    return (
        <div 
            className="
                hover:pb-10 
                duration-200 
                cursor-pointer
            "
        >
            <div
                onClick={handleClick}
                className={`
                    flex justify-center items-center
                    
                    rounded-full
                    
                    bg-white 
                    shadow-lg

                    transition-all
                    cursor-pointer
                `}
                style={{
                    borderWidth: props.size / 10 + 'px',
                    borderColor: color(),
                    width: props.size + 'px',
                    height: props.size + 'px',
                    transform: 'perspective(600px) rotateX(68deg)',
                    boxShadow: '10px 10px 30px rgba(0,0,0,0.5)'
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