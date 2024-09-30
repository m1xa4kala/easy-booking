package com.travel.repository.api;

import com.travel.entity.FlightRun;

import java.util.UUID;

public interface FlightRunRepository {
    FlightRun getById(UUID id);
}
