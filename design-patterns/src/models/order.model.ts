import {Product} from "./product.model";

export class Order {

    private prices: { price: number, type: 'tax' | 'base' }[] = []

    constructor(
        public id: number,
        public status: string = "Pending",
        public products: Product[],
        public price: number | null = null
    ) {
    }

    updateStatus(status: string) {
        this.status = status;
    }

    updatePrice(price: number) {
        this.price = price;
    }

    addTax(taxedPrice: number) {
        this.prices.push({price: taxedPrice, type: 'tax'});
    }

    getPrices() {
        return this.prices
    }
}