ALTER TABLE "tickets" DROP CONSTRAINT IF EXISTS "tickets_fk0";
ALTER TABLE "flight_run" DROP CONSTRAINT IF EXISTS "flight_run_fk0";
ALTER TABLE "flight_run" DROP CONSTRAINT IF EXISTS "flight_run_fk1";

ALTER TABLE "route" DROP CONSTRAINT IF EXISTS "route_fk0";
ALTER TABLE "route" DROP CONSTRAINT IF EXISTS "route_fk1";

ALTER TABLE "flight_rout" DROP CONSTRAINT IF EXISTS "flight_rout_fk0";
ALTER TABLE "flight_rout" DROP CONSTRAINT IF EXISTS "flight_rout_fk1";
ALTER TABLE "bus" DROP CONSTRAINT IF EXISTS "bus_fk0";

DROP TABLE IF EXISTS "tickets" CASCADE;
DROP TABLE IF EXISTS "flight_run" CASCADE;
DROP TABLE IF EXISTS "flight" CASCADE;
DROP TABLE IF EXISTS "route" CASCADE;
DROP TABLE IF EXISTS "station" CASCADE;
DROP TABLE IF EXISTS "flight_rout" CASCADE;
DROP TABLE IF EXISTS "bus" CASCADE;
DROP TABLE IF EXISTS "carrier_company" CASCADE;