import {NotificationService} from "../interfaces/notification.service";
import {OrderRepository} from "../interfaces/order.repository";

class OrderProcessor {
    constructor(
        private notificationService: NotificationService,
        private orderRepository: OrderRepository
    ) {}

    processOrder(orderId: number): void {
        console.log(`Processing order: ${orderId}`);

        const order = this.orderRepository.getById(orderId);

        if (!order) {
            throw new Error("order not found");
        }

        order.updateStatus("processed")

        this.notificationService.send(`Order ${orderId} processed successfully!`);
    }
}

