package com.travel.repository.api;

import com.travel.entity.Route;

import java.util.List;
import java.util.UUID;

public interface FlightRoutRepository {
    List<Route>  getRouteByFlight(UUID id);

}
