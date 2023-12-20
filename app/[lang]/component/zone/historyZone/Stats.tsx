type StatProps = {
    title: string,
    value: string
}

export default function Stat(props: StatProps) {
    return (
        <div className="flex justify-between">
            <p className="w-[50%]">
                {props.title}
            </p>
            <p className="w-[50%]">
                {props.value}
            </p>
        </div>
    )
}