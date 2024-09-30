package com.travel.mapper;

import com.travel.entity.Ticket;
import com.travel.repository.api.FlightRunRepository;
import easy_booking.ticket_service.tables.records.TicketsRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TicketRecordMapper implements RecordMapper<TicketsRecord, Ticket> {
    private final FlightRunRepository flightRunRepository;

    @Override
    public Ticket map(TicketsRecord ticketsRecord) {
        Ticket ticket = ticketsRecord.into(Ticket.class);
        ticket.setFlightRun(flightRunRepository.getById(ticketsRecord.getFlightRunId()));
        return ticket;
    }
}
