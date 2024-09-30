package com.travel.repository;

import com.travel.entity.Route;
import com.travel.repository.api.FlightRoutRepository;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
@RequiredArgsConstructor
public class FlightRoutRepositoryImpl implements FlightRoutRepository {
    private final DSLContext dsl;
    @Override
    public List<Route> getRouteByFlight(UUID id) {
        return null;
    }
}
