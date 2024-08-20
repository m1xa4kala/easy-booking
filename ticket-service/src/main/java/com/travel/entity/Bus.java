package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;


@Getter
@Setter
public class Bus {

    private UUID busId;

    private String title;

    private String busNumber;

    private CarrierCompany carrierCompany;

    private Integer placesCount;
}
