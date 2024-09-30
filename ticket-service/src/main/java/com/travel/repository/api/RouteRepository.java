package com.travel.repository.api;

import com.travel.entity.Route;

import java.util.UUID;

public interface RouteRepository {
    Route getById(UUID id);
}
