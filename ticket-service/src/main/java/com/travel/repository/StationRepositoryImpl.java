package com.travel.repository;

import com.travel.entity.Station;
import com.travel.repository.api.StationRepository;
import easy_booking.ticket_service.tables.Stations;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class StationRepositoryImpl implements StationRepository {

    private final DSLContext dsl;

    @Override
    public Station getById(UUID id) {
        return dsl.selectFrom(Stations.STATIONS)
                .where(Stations.STATIONS.ID.eq(id))
                .fetchAny()
                .into(Station.class);
    }
}
