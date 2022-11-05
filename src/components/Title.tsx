export default function Title(props: any) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-5 text-3xl">{props.children}</h1>
            <hr className="border-2 border-blue-500"/>
        </div>
    )
}