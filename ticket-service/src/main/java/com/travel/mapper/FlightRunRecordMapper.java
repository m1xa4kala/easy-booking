package com.travel.mapper;

import com.travel.entity.FlightRun;
import com.travel.repository.api.BusRepository;
import com.travel.repository.api.FlightRepository;
import easy_booking.ticket_service.tables.records.FlightRunsRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class FlightRunRecordMapper implements RecordMapper<FlightRunsRecord, FlightRun> {
    private final BusRepository busRepository;
    private final FlightRepository flightRepository;

    @Override
    public FlightRun map(FlightRunsRecord flightRunsRecord) {
        FlightRun flightRun = flightRunsRecord.into(FlightRun.class);
        flightRun.setBus(busRepository.getById(flightRunsRecord.getBusId()));
        flightRun.setFlight(flightRepository.getById(flightRunsRecord.getFlightId()));
        return flightRun;
    }
}
