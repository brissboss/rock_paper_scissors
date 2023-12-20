'use client'

import { useState, useEffect } from "react"

import HistoryZone from "../component/zone/historyZone/HistoryZone"

import { getDictionary } from '@/app/[lang]/dictionaries'
import { Dictionary } from "@/app/[lang]/dictionaries/interface"

type PageProps = {
    params: {
        lang: string;
    };
};

export default function HistoryPage(props: PageProps) {
    const [dict, setDict] = useState<Dictionary>({} as Dictionary);

    useEffect(() => {
        const loadDictionary = async () => {
            const dictionary = await getDictionary(props.params.lang.split('-')[0]);
            setDict(dictionary);
        };

        loadDictionary();
    }, [props.params.lang]);

    if (Object.keys(dict).length === 0) {
        return <div>...loading</div>
    }

    return (
        <div className="flex flex-col justify-center items-center h-[100dvh] relative">
                <HistoryZone 
                    keyHistory={1} 
                    largeWidth 
                    otherStyleDiv="w-[100%] h-full rounded-md px-4 py-2 border-[5px] border-white overflow-auto text-white"
                    backButton
                    dict={dict}
                />
        </div>
    )
}