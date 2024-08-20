package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class FlightRun {

    private UUID id;

    private Bus bus;

    private Integer price;

    private Flight flight;
}
