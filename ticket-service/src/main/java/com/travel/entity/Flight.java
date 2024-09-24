package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Flight {

    private UUID flightId;

    private String name;

    private String departureTime;
}
