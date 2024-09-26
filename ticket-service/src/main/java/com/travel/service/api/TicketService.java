package com.travel.service.api;

import com.travel.entity.Bus;
import com.travel.entity.Ticket;


import java.util.UUID;

public interface TicketService {
    Bus getBus(UUID id);
    Ticket getTicketById(UUID id);
}
