package com.travel.mapper;

import com.travel.entity.Route;
import com.travel.repository.api.StationRepository;
import easy_booking.ticket_service.tables.records.RoutesRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RouteRecordMapper implements RecordMapper<RoutesRecord, Route> {
    private final StationRepository stationRepository;

    @Override
    public Route map(RoutesRecord routesRecord) {
        Route route = routesRecord.into(Route.class);
        route.setArrivalStation(stationRepository.getById(routesRecord.getArrivalStationId()));
        route.setDepartureStation(stationRepository.getById(routesRecord.getDepartureStationId()));
        return route;
    }
}
