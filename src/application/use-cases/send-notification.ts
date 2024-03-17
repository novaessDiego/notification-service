import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";

import { NotificationsRepository } from '../repositories/notifiations-repository';

interface SendNotificationRequest {
  recipientId: string,
  content: string,
  Category: string,
}

interface SendNotificationResponse {
  notification: Notification,
}

@Injectable()
export class SendNotification {
  constructor(
    private notificationsRepository: NotificationsRepository) {}

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, Category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      Category,
    });
    
    await this.notificationsRepository.create(notification);

    return {
      notification,
    }
  }
}