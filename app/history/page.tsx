'use client'

import HistoryZone from "../component/zone/historyZone/HistoryZone"

export default function HistoryPage() {
    return (
        <div className="flex flex-col justify-center items-center h-[100dvh] relative">
                <HistoryZone 
                    keyHistory={1} 
                    largeWidth 
                    otherStyleDiv="w-[100%] h-full rounded-md px-4 py-2 border-[5px] border-white overflow-auto text-white"
                    backButton
                />
        </div>
    )
}