package com.travel.repository;

import com.travel.entity.FlightRun;
import com.travel.mapper.FlightRunRecordMapper;
import com.travel.repository.api.FlightRunRepository;
import easy_booking.ticket_service.tables.FlightRuns;
import easy_booking.ticket_service.tables.records.FlightRunsRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class FlightRunRepositoryImpl implements FlightRunRepository {
    private final DSLContext dsl;

    private final FlightRunRecordMapper recordMapper;

    @Override
    public FlightRun getById(UUID id) {
        return dsl.selectFrom(FlightRuns.FLIGHT_RUNS)
                .where(FlightRuns.FLIGHT_RUNS.ID.eq(id))
                .fetchAny()
                .map(record -> recordMapper.map((FlightRunsRecord) record));
    }
}
