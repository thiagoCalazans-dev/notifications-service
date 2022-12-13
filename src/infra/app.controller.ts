import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID as UUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  listNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotifications(@Body() body: CreateNotificationBody) {
    // console.log(body)
    const { recipientId, category, content } = body;

    await this.prisma.notification.create({
      data: {
        id: UUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
