package com.travel.repository.api;


import com.travel.entity.Bus;

import java.util.UUID;

public interface BusRepository {
     Bus getBusById(UUID busId);
}
