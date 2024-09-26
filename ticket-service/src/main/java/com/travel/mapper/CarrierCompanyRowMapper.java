package com.travel.mapper;

import com.travel.entity.CarrierCompany;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class CarrierCompanyRowMapper implements RowMapper<CarrierCompany> {
    @Override
    public CarrierCompany mapRow(ResultSet rs, int rowNum) throws SQLException {
        CarrierCompany carrierCompany = new CarrierCompany();
        carrierCompany.setId(UUID.fromString(rs.getString("carrier_company_id")));
        carrierCompany.setName(rs.getString("name"));
        carrierCompany.setIcon(rs.getBytes("icon"));
        carrierCompany.setPhone(rs.getString("phone"));
        return carrierCompany;
    }
}
