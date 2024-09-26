package com.travel.repository;

import com.travel.entity.CarrierCompany;
import com.travel.repository.api.CarrierCompanyRepository;
import easy_booking.ticket_service.tables.CarrierCompanys;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
@RequiredArgsConstructor
public class CarrierCompanyRepositoryImpl implements CarrierCompanyRepository {
    private  final DSLContext dsl;
    @Override
    public CarrierCompany getById(UUID id) {
        return dsl.selectFrom(CarrierCompanys.CARRIER_COMPANYS)
                .where(CarrierCompanys.CARRIER_COMPANYS.ID.eq(id))
                .fetchAny()
                .into(CarrierCompany.class);
    }
}
