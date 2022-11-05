export default class Product {
    private id: string
    private product: string
    private price: number
    
    constructor(id: string, product: string, price: number) {
        this.id = id
        this.product = product
        this.price = +price
    }
    
    static void() {
        return new Product('', '', 0)
    }

    get getId() {
        return this.id
    }

    get getProduct() {
        return this.product
    }

    get getPrice() {
        return this.price
    }
}