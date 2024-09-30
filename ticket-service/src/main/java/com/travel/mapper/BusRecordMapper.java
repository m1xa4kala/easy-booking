package com.travel.mapper;

import com.travel.entity.Bus;
import com.travel.repository.api.CarrierCompanyRepository;
import easy_booking.ticket_service.tables.records.BusesRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class BusRecordMapper implements RecordMapper<BusesRecord, Bus> {

    private final CarrierCompanyRepository carrierCompanyRepository;

    @Override
    public Bus map(BusesRecord busesRecord) {
        Bus bus = busesRecord.into(Bus.class);
        bus.setCarrierCompany(carrierCompanyRepository.getById(busesRecord.getCarrierCompanyId()));
        return bus;
    }
}
