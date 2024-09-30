package com.travel.mapper;

import com.travel.entity.Flight;
import easy_booking.ticket_service.tables.records.FlightsRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class FlightRecordMapper implements RecordMapper<FlightsRecord, Flight> {

    @Override
    public Flight map(FlightsRecord flightsRecord) {


        return null;
    }
}
