import { Publisher, Subjects, TicketUpdatedEvent } from "@wanderreisen/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
