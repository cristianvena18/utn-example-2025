import {NotificationService} from "../interfaces/notification.service";


class EmailNotificationService implements NotificationService {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}
