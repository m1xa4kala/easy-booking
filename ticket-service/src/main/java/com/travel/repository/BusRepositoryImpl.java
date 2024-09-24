package com.travel.repository;

import com.travel.entity.Bus;
import com.travel.mapper.BusRowMapper;
import com.travel.repository.api.BusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class BusRepositoryImpl implements BusRepository {
    private final JdbcTemplate jdbcTemplate;

    @Override
    public Bus getBusById(UUID busId) {
        String sql = "SELECT b.*, b.id AS bus_id , cc.*, cc.id AS carrier_company_id " +
                "FROM bus b LEFT JOIN carrier_company cc ON b.carrier_company_id = cc.id " +
                "WHERE b.id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{busId}, new BusRowMapper());
    }
}
