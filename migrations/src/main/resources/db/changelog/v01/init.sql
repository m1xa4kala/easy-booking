CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "tickets"
(
    "id"            uuid   NOT NULL default (uuid_generate_v4()),
    "flight_run_id" uuid   NOT NULL,
    "user_id"       uuid,
    "first_name"    text   NOT NULL,
    "last_name"     text   NOT NULL,
    "place"         bigint NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "flight_run"
(
    "id"        uuid   NOT NULL default (uuid_generate_v4()),
    "bus_id"    uuid   NOT NULL,
    "price"     bigint NOT NULL,
    "flight_id" uuid   NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "flight"
(
    "id"             uuid NOT NULL default (uuid_generate_v4()),
    "name"           text NOT NULL,
    "departure_time" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "route"
(
    "id"                   uuid   NOT NULL default (uuid_generate_v4()),
    "departure_station_id" uuid   NOT NULL,
    "arrival_station_id"   uuid   NOT NULL,
    "duration"             bigint NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "station"
(
    "id"    uuid NOT NULL default (uuid_generate_v4()),
    "title" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "flight_rout"
(
    "id"     uuid NOT NULL default (uuid_generate_v4()),
    "flight" uuid NOT NULL,
    "rout"   uuid NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "bus"
(
    "id"                 uuid   NOT NULL default (uuid_generate_v4()),
    "title"              text   NOT NULL,
    "bus_number"         text   NOT NULL,
    "carrier_company_id" uuid   NOT NULL,
    "places_count"       bigint NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "carrier_company"
(
    "id"    uuid         NOT NULL default (uuid_generate_v4()),
    "name"  text         NOT NULL,
    "icon"  varchar(255) NOT NULL,
    "phone" text         NOT NULL,
    PRIMARY KEY ("id")
);

ALTER TABLE "tickets"
    ADD CONSTRAINT "tickets_fk1" FOREIGN KEY ("flight_run_id") REFERENCES "flight_run" ("id");
ALTER TABLE "flight_run"
    ADD CONSTRAINT "flight_run_fk1" FOREIGN KEY ("bus_id") REFERENCES "bus" ("id");

ALTER TABLE "flight_run"
    ADD CONSTRAINT "flight_run_fk3" FOREIGN KEY ("flight_id") REFERENCES "flight" ("id");

ALTER TABLE "route"
    ADD CONSTRAINT "route_fk1" FOREIGN KEY ("departure_station_id") REFERENCES "station" ("id");

ALTER TABLE "route"
    ADD CONSTRAINT "route_fk2" FOREIGN KEY ("arrival_station_id") REFERENCES "station" ("id");

ALTER TABLE "flight_rout"
    ADD CONSTRAINT "flight_rout_fk1" FOREIGN KEY ("flight") REFERENCES "flight" ("id");

ALTER TABLE "flight_rout"
    ADD CONSTRAINT "flight_rout_fk2" FOREIGN KEY ("rout") REFERENCES "route" ("id");
ALTER TABLE "bus"
    ADD CONSTRAINT "bus_fk3" FOREIGN KEY ("carrier_company_id") REFERENCES "carrier_company" ("id");