package com.travel.service.api;

import com.travel.entity.Bus;

import java.util.UUID;

public interface TicketService {
    Bus getBus(UUID id);
}
