interface ButtonProps {
    children: any
    color?: "purple" | "blue" | "orange"
    className?: string
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}