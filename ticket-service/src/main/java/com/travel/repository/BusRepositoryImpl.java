package com.travel.repository;

import com.travel.entity.Bus;
import com.travel.mapper.BusRecordMapper;
import com.travel.repository.api.BusRepository;
import easy_booking.ticket_service.tables.Buses;
import easy_booking.ticket_service.tables.records.BusesRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class BusRepositoryImpl implements BusRepository {
    private final DSLContext dsl;

    private final BusRecordMapper busRecordMapper;

    @Override
    public Bus getBusById(UUID busId) {
        return dsl.selectFrom(Buses.BUSES)
                .where(Buses.BUSES.ID.eq(busId))
                .fetchAny()
                .map(record -> busRecordMapper.map((BusesRecord) record));
    }
}
