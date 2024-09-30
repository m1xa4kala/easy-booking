package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class Flight {

    private UUID id;

    private String name;

    private String departureTime;

    private List<Route> routeList;
    public Flight(UUID id, String name, String departureTime, List<Route> routeList) {
        this.id = id;
        this.name = name;
        this.departureTime = departureTime;
        this.routeList = routeList;
    }
}
