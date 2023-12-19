'use client'

import HistoryZone from "../component/zone/HistoryZone"

export default function HistoryPage() {
    return (
        <div className="flex justify-center items-center h-[100dvh] pb-5">
            <HistoryZone 
                keyHistory={1} 
                largeWidth 
                otherStyleDiv="w-[100%] h-full rounded-md px-4 py-2 border-[5px] border-white overflow-auto text-white"
            />
        </div>
    )
}