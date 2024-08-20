package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Ticket {

    private String ticketId;

    private FlightRun flightRun;

    private User user;

    private Integer seatNumber;

    private Double price;
}
