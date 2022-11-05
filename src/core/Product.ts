export default class Product {
    private id: string
    private title: string
    private price: number
    
    constructor(id: string, title: string, price: number) {
        this.id = id
        this.title = title
        this.price = +price
    }
    
    static void() {
        return new Product('', '', 0)
    }

    get getId() {
        return this.id
    }

    get getTitle() {
        return this.title
    }

    get getPrice() {
        return this.price
    }
}