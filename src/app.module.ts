import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { SeedModule } from './modules/demo/demo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    TicketsModule,
    SeedModule, 
  ],
})
export class AppModule {}
