import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor( private sendNotification: SendNotification ) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const {content, Category, recipientId} = body
    
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      Category,
    });

    return { notification };
  }
}
