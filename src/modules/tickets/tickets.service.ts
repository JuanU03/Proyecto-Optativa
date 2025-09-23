import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Ticket } from './schemas/ticket.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UsersService } from '../users/users.service';
import { Types } from 'mongoose';

// Definimos un tipo Mongoose para Ticket
type TicketDocument = Ticket & Document;

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>,
    private usersService: UsersService,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = new this.ticketModel(createTicketDto);
    const savedTicket = await ticket.save();

    // Actualizar tickets del usuario
    const user = await this.usersService.findOne(createTicketDto.owner);
    
    if (user) {
        user.tickets.push(savedTicket._id as Types.ObjectId); // casteo limpio
        await user.save();
    }

    // Convertimos a JSON para devolver solo los datos "limpios" sin _id/metadata
    return savedTicket.toObject();
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().populate('owner').exec();
  }

  async findOne(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id).populate('owner').exec();
  }
}

