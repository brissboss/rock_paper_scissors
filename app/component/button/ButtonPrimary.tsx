type ButtonPrimaryProps = {
    name: string,
    action: Function
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {

    const handleClick = () => {
        props.action()
    }

    return (
        <div 
            className="
                px-4 py-1.5

                text-2xl

                rounded-md

                cursor-pointer

                bg-red-500
                hover:bg-red-600

                transition-all duration-200
            "

            onClick={handleClick}
        >
            {props.name}
        </div>
    )
}