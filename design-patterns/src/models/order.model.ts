import {Product} from "./product.model";

export class Order {

    private prices: { price: number, type: 'tax' | 'base' }[] = []

    constructor(
        public id: number,
        public status: string = "Pending",
        public products: Product[],
    ) {
    }

    updateStatus(status: string) {
        this.status = status;
    }

    addTax(taxedPrice: number) {
        this.prices.push({price: taxedPrice, type: 'tax'});
    }

    getPrices() {
        return this.prices
    }
}