package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Ticket {

    private UUID ticketId;

    private FlightRun flightRun;

    private User user;

    private Integer seatNumber;

    private Double price;
}
