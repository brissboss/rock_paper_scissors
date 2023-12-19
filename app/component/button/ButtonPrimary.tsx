type ButtonPrimaryProps = {
    name: string,
    action: Function,

    styleSup?: string
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {

    const handleClick = () => { props.action() }

    return (
        <div 
            onClick={handleClick}
            className={`
                px-4 py-1.5
                text-2xl
                rounded-md

                bg-red-500
                hover:bg-red-600
                transition-all duration-200
                cursor-pointer
                text-center
            ` + props.styleSup}
        >
            {props.name}
        </div>
    )
}