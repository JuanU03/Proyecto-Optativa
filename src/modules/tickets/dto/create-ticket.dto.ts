export class CreateTicketDto {
  eventTitle: string;
  eventDate: Date;
  description?: string;
  quantity: number;
  owner: string; // id del usuario propietario
}
