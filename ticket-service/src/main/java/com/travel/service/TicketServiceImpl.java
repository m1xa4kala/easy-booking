package com.travel.service;

import com.travel.entity.Bus;
import com.travel.entity.Flight;
import com.travel.entity.Ticket;
import com.travel.repository.api.BusRepository;
import com.travel.repository.api.FlightRepository;
import com.travel.service.api.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TicketServiceImpl implements TicketService {
    private final BusRepository busRepository;
    private final FlightRepository flightRepository;

    @Override
    public Bus getBus(UUID id) {

        return busRepository.getById(id);
    }

    @Override
    public Flight getFlight(UUID id) {
        return flightRepository.getById(id);
    }

    @Override
    public Ticket getTicketById(UUID id) {
        return null;
    }
}
