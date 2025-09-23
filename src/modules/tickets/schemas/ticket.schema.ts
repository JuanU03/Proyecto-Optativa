import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

@Schema()
export class Ticket extends Document {
  @Prop({ required: true })
  eventTitle: string;

  @Prop({ required: true })
  eventDate: Date;

  @Prop()
  description: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: User;

  @Prop({ default: 'active' })
  status: string;

  @Prop()
  qrCode: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
