import firebase from "../config";
import Product from "../../core/Product";
import ProductRepository from "../../core/ProductRepository";

export default class ProductsCollection implements ProductRepository {
    private converter = {
        toFirestore(product: Product) {
            return {
                title: product.getTitle,
                price: product.getPrice,
            }
        },

        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Product {
            const data = snapshot.data(options)
            return new Product(snapshot.id, data.title, data.price)
        }
    }

    async save(product: Product): Promise<Product> {
        if(product?.getId) {
            await this.collectionFirebase().doc(product.getId).set(product)
            // console.log(`TESTE1: ${product.getTitle}`)
            return product
        } else {
            const docRef = await this.collectionFirebase().add(product)
            const doc = await docRef.get()
            // console.log(`TESTE2: ${doc.data()!.getTitle} ${doc.data()!.getId} ${doc.data()!.getPrice}`)
            return doc.data()!
        }
    }

    async remove(product: Product): Promise<void> {
        console.log(`TESTE3: ${product.getTitle}`)
        return this.collectionFirebase().doc(product.getId).delete()
    }

    async getAll(): Promise<Product[]> {
        const query = await this.collectionFirebase().get()
        // console.log(`TESTE5: ${query.docs.map(doc => doc.data().getTitle) ?? []}`)
        return query.docs.map(doc => doc.data())
    }

    private collectionFirebase() {
        return firebase.firestore().collection('products').withConverter(this.converter)
    }
}