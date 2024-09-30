package com.travel.entity;


import lombok.Getter;
import lombok.Setter;

import java.util.UUID;


@Getter
@Setter
public class Station {

    private UUID id;

    private  String title;
    public Station(UUID id, String title) {
        this.id = id;
        this.title = title;
    }
}
