import firebase from "firebase/compat/app";
import Product from "../../core/Product";
import ProductRepository from "../../core/ProductRepository";

export default class Products implements ProductRepository {
    private converter = {
        toFirestore(product: Product) {
            return {
                product: product.getProduct,
                price: product.getPrice,
            }
        },

        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Product {
            const data = snapshot.data(options)
            return new Product(data.product, data.id, data.price)
        }
    }

    async save(product: Product): Promise<Product> {
        if(product?.getId) {
            await this.collectionFirebase().doc(product.getId).set(product)
            return product
        } else {
            const docRef = await this.collectionFirebase().add(product)
            const doc = await docRef.get()
            return doc.data()!
        }
    }

    async remove(product: Product): Promise<void> {
        return this.collectionFirebase().doc(product.getId).delete()
    }

    async getAll(): Promise<Product[]> {
        const query = await this.collectionFirebase().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collectionFirebase() {
        return firebase.firestore().collection('products').withConverter(this.converter)
    }
}