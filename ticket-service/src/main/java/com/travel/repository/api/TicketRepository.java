package com.travel.repository.api;

import com.travel.entity.Ticket;
import java.util.UUID;

public interface TicketRepository {
    Ticket getTicketById (UUID id);
}
