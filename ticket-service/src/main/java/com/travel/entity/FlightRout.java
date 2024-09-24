package com.travel.entity;


import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class FlightRout {

    private UUID flightRoutId;


    private Flight flight;


    private Route route;
}
