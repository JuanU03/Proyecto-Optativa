import { Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { TicketsService } from '../tickets/tickets.service';

@Controller('demo')
export class DemoController {
  constructor(
    private readonly usersService: UsersService,
    private readonly ticketsService: TicketsService,
  ) {}

  @Post()
  async runSeed() {
    // Crear dos usuarios
    const user1 = await this.usersService.create({
      email: 'juan@example.com',
      password: '123456',
      role: 'client',
    });

    const user2 = await this.usersService.create({
      email: 'maria@example.com',
      password: '123456',
      role: 'client',
    });

    // Crear tres tickets
    const ticket1 = await this.ticketsService.create({
      eventTitle: 'Concierto Rock',
      eventDate: new Date('2025-12-01T20:00:00'),
      description: 'Concierto de rock en la ciudad',
      quantity: 100,
      owner: user1._id.toString(),
    });

    const ticket2 = await this.ticketsService.create({
      eventTitle: 'Obra de Teatro',
      eventDate: new Date('2025-12-05T19:00:00'),
      description: 'Obra de teatro para toda la familia',
      quantity: 50,
      owner: user2._id.toString(),
    });

    const ticket3 = await this.ticketsService.create({
      eventTitle: 'Partido de Fútbol',
      eventDate: new Date('2025-12-05T19:00:00'),
      description: 'Partido Selección Argentina',
      quantity: 50,
      owner: user2._id.toString(),
    });
    return {
      users: [user1, user2],
      tickets: [ticket1, ticket2],
    };
  }
}
