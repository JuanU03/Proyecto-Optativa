import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { UsersModule } from '../users/users.module';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  imports: [UsersModule, TicketsModule],
  controllers: [DemoController],
})
export class SeedModule {}
