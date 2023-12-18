import GameZoneUSer from "./component/user/GameZone"
export default function Home() {
    return (
        <div
            className="
                flex flex-col justify-end items-center 
                h-[100dvh] w-full
            "
        >
            <GameZoneUSer/>
        </div>
    )
}
