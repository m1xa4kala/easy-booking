package com.travel.entity;


import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class FlightRout {

    private UUID id;


    private Flight flight;


    private Route route;
}
