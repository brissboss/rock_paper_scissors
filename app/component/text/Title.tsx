type TitleProps = {
    content: string,

    size?: string
}

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 
                className="px-3 py-1.5 font-medium text-center underline"
                style={{ fontSize: (props.size ? props.size : '2rem') }}
            >
                {props.content}
            </h1>
        </div>
    )
}
