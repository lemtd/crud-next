import Title from "./Title";

interface LayoutProps {
    title: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
        flex flex-col w-100 bg-white text-gray-500 rounded-md`}>
            <Title>{props.title}</Title>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}