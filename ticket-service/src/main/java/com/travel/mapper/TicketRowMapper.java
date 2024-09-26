package com.travel.mapper;

import com.travel.entity.Ticket;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class TicketRowMapper  implements RowMapper<Ticket> {
    @Override
    public Ticket mapRow(ResultSet rs, int rowNum) throws SQLException {
        Ticket ticket = new Ticket();
        ticket.setTicketId(UUID.fromString(rs.getString("ticket_id")));
        return null;
    }
}
