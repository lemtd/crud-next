import { useState } from "react";
import Product from "../core/Product";
import Button from "./Button";
import Input from "./Input";

interface FormsProps {
    product: Product
}

export default function Forms(props: FormsProps) {
    const id = props.product?.getId
    const [product, setProduct] = useState(props.product?.getProduct ?? '')
    const [price, setPrice] = useState(props.product?.getPrice ?? 0)
    return (
        <div>
            {id ? (<Input onlyToRead text="ID" value={id}></Input>) : false}
            <Input text="Product" value={product} onChanged={setProduct} className="mb-4"></Input>
            <Input text="Price" value={price} onChanged={setPrice} className="mb-4"></Input>
            <div className="flex justify-end mt-3">
                <Button className="mr-5">
                    {id ? 'Edit' : 'Save'}
                </Button>
                <Button>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}