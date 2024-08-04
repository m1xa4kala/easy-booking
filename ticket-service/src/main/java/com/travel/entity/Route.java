package com.travel.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Route {

    private UUID routId;

    private Station departureStation;

    private Station arrivalStation;

    private Integer duration;

}
