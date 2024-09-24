package com.travel.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CarrierCompany {

    private UUID companyId;

    private String name;


    private byte[] icon;

    private String phone;
}
