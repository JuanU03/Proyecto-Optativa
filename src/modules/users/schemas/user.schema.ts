import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Ticket } from '../../tickets/schemas/ticket.schema';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: 'client' })
  role: string;

  @Prop({ type: [Types.ObjectId], ref: 'Ticket', default: [] })
  tickets: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
