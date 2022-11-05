interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    onlyToRead?: boolean
    onChanged?: (value: any) => void
    className?: string
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label htmlFor="">{props.text}</label>
            <input type={props.type ?? 'text'}
                   value={props.value}  
                   readOnly={props.onlyToRead}
                   className={`border-blue-00 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${props.onlyToRead ? '' : 'focus:bg-white'}`}
                   onChange={e => props.onChanged?.(e.target.value)}/>
        </div>
    )
}