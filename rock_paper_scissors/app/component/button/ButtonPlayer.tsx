import Image from 'next/image'

import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'

type ButtonPlayerProps = {
    // leaf, rock or scissors
    type: string 

    // in px
    size: number

    action: Function
}

export default function ButtonPlayer(props: ButtonPlayerProps) {

    const Icon = () => {
        switch (props.type) {
            case 'leaf':
                return <Image src={leaf} alt={props.type} width={props.size / 1.89} />
            case 'rock':
                return <Image src={rock} alt={props.type} width={props.size / 1.89} />
            case 'scissors':
                return <Image src={scissors} alt={props.type} width={props.size / 1.89} />
            default:
                return <Image src={leaf} alt={props.type} width={props.size / 1.89} />
        }
    }

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
            onClick={() => props.action()}
            className={`
                    flex justify-center items-center
                    
                    rounded-full
                    
                    bg-white 
                    shadow-lg

                    ${props.type === 'leaf' && 'hover:bg-[#FF3636]'}
                    ${props.type === 'rock' && 'hover:bg-[#FFC436]'}
                    ${props.type === 'scissors' && 'hover:bg-[#2DBE44]'}

                    transition-all
                    cursor-pointer
                `}
            style={{
                borderWidth: props.size / 10 + 'px',
                borderColor: color(),
                width: props.size + 'px',
                height: props.size + 'px',
                transform: 'perspective(600px) rotateX(55deg)',
                boxShadow: '10px 10px 30px rgba(0,0,0,0.5)'
            }
            }
        >
            <Icon />
        </div>
    )
}