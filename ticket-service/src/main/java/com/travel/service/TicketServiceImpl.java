package com.travel.service;

import com.travel.entity.Bus;
import com.travel.entity.Ticket;
import com.travel.repository.api.BusRepository;
import com.travel.service.api.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;
@Service
@RequiredArgsConstructor
public class TicketServiceImpl implements TicketService {
    private final BusRepository busRepository;
    @Override
    public Bus getBus(UUID id) {
        Bus bus =busRepository.getBusById(id);


        return bus;
    }

    @Override
    public Ticket getTicketById(UUID id) {
        return null;
    }
}
