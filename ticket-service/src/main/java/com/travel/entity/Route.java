package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Route {

    private UUID id;

    private Station departureStation;

    private Station arrivalStation;

    private Long duration;
    public Route(UUID id, Long duration, Station departureStation, Station arrivalStation) {
        this.id = id;
        this.duration = duration;
        this.departureStation = departureStation;
        this.arrivalStation = arrivalStation;
    }

}
