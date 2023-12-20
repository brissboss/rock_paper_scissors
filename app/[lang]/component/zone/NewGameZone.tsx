import Title from '@/app/[lang]/component/text/Title'
import ZoneTemplate from "./ZoneTemplate"

import { Dictionary } from '@/app/[lang]/dictionaries/interface'

type Props = {
    dict: Dictionary
}

export default function NewGameZone(props: Props) {
    return (
        <ZoneTemplate
            largeWidth
            otherDivStyle="
                flex flex-col justify-center items-center
                w-[100%]
                h-full
                rounded-md
                py-2 px-3
                overflow-auto
                text-white

                border-[5px] border-white
            "   
        >
            <Title content={props.dict.newGame.title}/>
            <p 
                className="
                    flex justify-center items-center 
                    h-full 
                    text-center text-[1.3rem] xl:text-[1.7rem]
                "
            >
                {props.dict.newGame.exp}
            </p>
        </ZoneTemplate>
    )
}