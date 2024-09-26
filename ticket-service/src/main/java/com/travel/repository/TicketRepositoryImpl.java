package com.travel.repository;

import com.travel.entity.Ticket;
import com.travel.repository.api.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
@RequiredArgsConstructor
public class TicketRepositoryImpl implements TicketRepository {
    private final JdbcTemplate jdbcTemplate;
    @Override
    public Ticket getTicketById(UUID id) {

        return null;
    }
}
