package com.travel.repository.api;

import com.travel.entity.CarrierCompany;

import java.util.UUID;


public interface CarrierCompanyRepository {
    CarrierCompany getById(UUID id);
}
