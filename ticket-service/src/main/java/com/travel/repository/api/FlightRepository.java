package com.travel.repository.api;

import com.travel.entity.Flight;

import java.util.UUID;

public interface FlightRepository {
    Flight getById(UUID id);
}
