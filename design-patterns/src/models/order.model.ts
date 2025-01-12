export class Order {
    constructor(public id: number, public status: string = "Pending") {}

    updateStatus(status: string) {
        this.status = status;
    }
}