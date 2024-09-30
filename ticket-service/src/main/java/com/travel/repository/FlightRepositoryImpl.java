package com.travel.repository;

import com.travel.entity.Flight;
import com.travel.entity.Route;
import com.travel.entity.Station;
import com.travel.repository.api.FlightRepository;
import easy_booking.ticket_service.tables.FlightRouts;
import easy_booking.ticket_service.tables.Flights;
import easy_booking.ticket_service.tables.Routes;
import easy_booking.ticket_service.tables.Stations;
import lombok.RequiredArgsConstructor;
import org.jooq.*;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.List;

import static org.jooq.impl.DSL.*;

@Repository
@RequiredArgsConstructor
public class FlightRepositoryImpl implements FlightRepository {
    private final DSLContext dsl;

    @Override
    public Flight getById(UUID id) {

        Record3<UUID, String, String> flightRecord = dsl.select(Flights.FLIGHTS.ID, Flights.FLIGHTS.NAME, Flights.FLIGHTS.DEPARTURE_TIME)
                .from(Flights.FLIGHTS)
                .where(Flights.FLIGHTS.ID.eq(id))
                .fetchOne();
        if (flightRecord == null) return null;
        List<Route> routes = dsl.select(
                        Routes.ROUTES.ID,
                        Routes.ROUTES.DURATION,
                        field(name("departure_stations", "id"), UUID.class).as("departure_station_id"),
                        field(name("departure_stations", "title"), String.class).as("departure_station_name"),
                        field(name("arrival_stations", "id"), UUID.class).as("arrival_station_id"),
                        field(name("arrival_stations", "title"), String.class).as("arrival_station_name")
                )
                .from(Routes.ROUTES)
                .join(FlightRouts.FLIGHT_ROUTS).on(FlightRouts.FLIGHT_ROUTS.ROUT.eq(Routes.ROUTES.ID))
                .join(Stations.STATIONS.as("departure_stations")).on(Routes.ROUTES.DEPARTURE_STATION_ID.eq(field(name("departure_stations", "id"), UUID.class)))
                .join(Stations.STATIONS.as("arrival_stations")).on(Routes.ROUTES.ARRIVAL_STATION_ID.eq(field(name("arrival_stations", "id"), UUID.class)))
                .where(FlightRouts.FLIGHT_ROUTS.FLIGHT.eq(id))
                .fetch(record -> new Route(
                        record.get(Routes.ROUTES.ID),
                        record.get(Routes.ROUTES.DURATION),
                        new Station(record.get(Routes.ROUTES.DEPARTURE_STATION_ID), null),
                        new Station(record.get(Routes.ROUTES.ARRIVAL_STATION_ID), null)
                ));
        for (Route route : routes) {
            UUID departureStationId = route.getDepartureStation().getId();
            UUID arrivalStationId = route.getArrivalStation().getId();
            Station departureStation = dsl.select(
                            Stations.STATIONS.ID,
                            Stations.STATIONS.TITLE
                    )
                    .from(Stations.STATIONS)
                    .where(Stations.STATIONS.ID.eq(departureStationId))
                    .fetchOne(record -> new Station(
                            record.get(Stations.STATIONS.ID),
                            record.get(Stations.STATIONS.TITLE)
                    ));

            Station arrivalStation = dsl.select(
                            Stations.STATIONS.ID,
                            Stations.STATIONS.TITLE
                    )
                    .from(Stations.STATIONS)
                    .where(Stations.STATIONS.ID.eq(arrivalStationId))
                    .fetchOne(record -> new Station(
                            record.get(Stations.STATIONS.ID),
                            record.get(Stations.STATIONS.TITLE)
                    ));

            route.setDepartureStation(departureStation);
            route.setArrivalStation(arrivalStation);
        }

        return new Flight(
                flightRecord.get(Flights.FLIGHTS.ID),
                flightRecord.get(Flights.FLIGHTS.NAME),
                flightRecord.get(Flights.FLIGHTS.DEPARTURE_TIME),
                routes
        );
    }
}
