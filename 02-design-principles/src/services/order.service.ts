import {NotificationService} from "../interfaces/notification.service";
import {OrderRepository} from "../interfaces/order.repository";
import {TaxService} from "./tax.service";

class OrderProcessor {
    constructor(
        private notificationService: NotificationService,
        private orderRepository: OrderRepository,
        private taxService: TaxService
    ) {}

    processOrder(orderId: number): void {
        console.log(`Processing order: ${orderId}`);

        const order = this.orderRepository.getById(orderId);

        if (!order) {
            throw new Error("order not found");
        }

        const totalPrice = order.products.reduce((acc, curr) => {
            return acc + curr.price
        }, 0)

        const taxedPrice = this.taxService.calculateTax(totalPrice)

        order.addTax(taxedPrice)

        // ...process through payment gateway

        order.updateStatus("processed")

        this.notificationService.send(`Order ${orderId} processed successfully!`);
    }
}

