package com.travel.repository;

import com.travel.entity.Route;
import com.travel.mapper.RouteRecordMapper;
import com.travel.repository.api.RouteRepository;
import easy_booking.ticket_service.tables.Routes;
import easy_booking.ticket_service.tables.records.RoutesRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class RouteRepositoryImpl implements RouteRepository {
    private final DSLContext dsl;
    private final RouteRecordMapper routeRecordMapper;

    @Override
    public Route getById(UUID id) {
        return dsl.selectFrom(Routes.ROUTES)
                .where(Routes.ROUTES.ID.eq(id))
                .fetchAny()
                .map(record -> routeRecordMapper.map((RoutesRecord) record));
    }
}
