package com.travel.mapper;

import com.travel.entity.Bus;
import com.travel.entity.CarrierCompany;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class BusRowMapper implements RowMapper<Bus> {

    @Override
    public Bus mapRow(ResultSet rs, int rowNum) throws SQLException {
        CarrierCompanyRowMapper carrierCompanyRowMapper =new  CarrierCompanyRowMapper();
        Bus bus = new Bus();
        bus.setBusId(UUID.fromString(rs.getString("id")));
        bus.setBusNumber(rs.getString("bus_number"));
        bus.setTitle(rs.getString("title"));
        bus.setPlacesCount(rs.getInt("places_count"));
        CarrierCompany carrierCompany = carrierCompanyRowMapper.mapRow(rs,rowNum);
        bus.setCarrierCompany(carrierCompany);
        return bus;
    }
}
