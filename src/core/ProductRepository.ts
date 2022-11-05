import Product from "./Product";

export default interface ProductRepository {
    save(product: Product): Promise<Product>
    remove(product: Product): Promise<void>
    getAll(): Promise<Product[]>
}