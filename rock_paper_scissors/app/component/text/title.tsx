type TitleProps = {
    content: string,
}

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className="px-3 py-1.5 text-[2rem] font-medium text-center">{props.content}</h1>
        </div>
    )
}