package com.travel.repository;

import com.travel.entity.Ticket;
import com.travel.mapper.TicketRecordMapper;
import com.travel.repository.api.TicketRepository;
import easy_booking.ticket_service.tables.Tickets;
import easy_booking.ticket_service.tables.records.TicketsRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class TicketRepositoryImpl implements TicketRepository {
    private final DSLContext dsl;
    private final TicketRecordMapper recordMapper;

    @Override
    public Ticket getById(UUID id) {
        return dsl.selectFrom(Tickets.TICKETS)
                .where(Tickets.TICKETS.ID.eq(id))
                .fetchAny()
                .map(record -> recordMapper.map((TicketsRecord) record));
    }
}
