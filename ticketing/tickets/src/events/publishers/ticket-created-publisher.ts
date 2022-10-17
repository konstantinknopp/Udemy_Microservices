import { Publisher, Subjects, TicketCreatedEvent } from "@wanderreisen/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
