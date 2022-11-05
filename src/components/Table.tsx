import Product from "../core/Product"
import { IconEdit, IconRemove } from "./Icons"

interface TableProps {
    products?: Product[]
    selectedProduct?: (product: Product) => void
    removedProduct?: (product: Product) => void
}

export default function Table(props: TableProps) {
    const showActions = props.selectedProduct || props.removedProduct

    function renderHead() {
        return (
                <tr>
                    <th className="text-left p-4">Id</th>
                    <th className="text-left p-a"> Product</th>
                    <th className="text-left p-4"> Price</th>
                    {showActions ? <th className="p-4"> Action</th> : false}
                </tr>
        )
    }

    function renderData() {
        return props.products?.map((product, i) => {
            return (
                    <tr key={product.getId}
                        className={`${i % 2 === 0? "bg-slate-200" : "bg-slate-300"}`}>
                        <td className="text-left p-4">{product.getId}</td>
                        <td className="text-left p-4">{product.getTitle}</td>
                        <td className="text-left p-4">{product.getPrice}</td>
                        {showActions ? renderAction(product) : false}
                    </tr>
            )
        })
    }

    function renderAction(product: Product) {
        return (
            <td className="flex justify-center">
                {props.selectedProduct ? (
                    <button className={`flex justify-center items-center text-green-600 rounded-full p-2 hover:bg-slate-50`}
                            onClick={() => props.selectedProduct?.(product)}>
                        {IconEdit}
                    </button>
                ) : false}
                
                {props.removedProduct ? (
                    <button className={`flex justify-center items-center text-red-600 rounded-full p-2 hover:bg-slate-50`}
                            onClick={() => props.removedProduct?.(product)}>
                        {IconRemove}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`bg-gradient-to-r from-slate-500 to-slate-700 text-white`}>
                {renderHead()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}