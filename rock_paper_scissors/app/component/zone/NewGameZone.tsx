import Title from "../text/title"
import ZoneTemplate from "./ZoneTemplate"

export default function NewGameZone() {
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
            <Title content="Pierre Feuille Ciseaux"/>
            <p className="flex justify-center items-center text-center h-full text-[1.5rem]">Pour faire une partie faite votre choix parmis les 3 bouttons ci dessous</p>
        </ZoneTemplate>
    )
}