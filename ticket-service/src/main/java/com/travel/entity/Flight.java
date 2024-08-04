package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Flight {

    private UUID id;

    private String name;

    private String departureTime;
}
