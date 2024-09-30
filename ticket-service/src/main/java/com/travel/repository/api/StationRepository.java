package com.travel.repository.api;

import com.travel.entity.Station;

import java.util.UUID;

public interface StationRepository {
    Station getById(UUID id);
}
