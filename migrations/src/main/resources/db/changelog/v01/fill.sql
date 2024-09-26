INSERT INTO stations (id, title)
VALUES ('c1163a5f-6bce-4733-91d0-5cfe084c5b96', 'Kineshma'),
       ('85b4f500-34be-4c48-81d8-e1b01d9744e4', 'Vladimir'),
       ('a9583565-d54b-4e3c-8ac1-ef4dffd3f952', 'Gui'),
       ('41ead9f5-c1d5-4de8-b2ee-1a292171a5d4', 'Moscow');

INSERT INTO routes (id, departure_station_id, arrival_station_id, duration)
VALUES ('659027ed-857c-43f8-a910-3793c5827aed', 'c1163a5f-6bce-4733-91d0-5cfe084c5b96',
        '85b4f500-34be-4c48-81d8-e1b01d9744e4', 10),
       ('419393c6-6965-4c24-a84c-d860996581ee', '85b4f500-34be-4c48-81d8-e1b01d9744e4',
        'a9583565-d54b-4e3c-8ac1-ef4dffd3f952', 15),
       ('257fe0dc-f991-418b-8e30-6566306ab0a7', 'a9583565-d54b-4e3c-8ac1-ef4dffd3f952',
        '41ead9f5-c1d5-4de8-b2ee-1a292171a5d4', 14);

INSERT INTO carrier_companys (id, name, icon, phone)
VALUES ('3ab7a364-319c-4be2-9f0b-9899476a62d9', 'ИП.Кракен', 24, '8900000000000'),
       ('afb42bc1-55ca-489b-b423-8edb144a42b8', 'ИП.Бриганов', 1558, '8922222222222'),
       ('8b2f80ee-2ec6-4459-ab1a-fa033f62dd08', 'ИП.Терешкова', 27, '8911111111111');

INSERT INTO buses(id, title, bus_number, carrier_company_id, places_count)
VALUES ('705de7fb-ddac-4790-832d-d81372342f5b', 'wat', 'У365КА56', '3ab7a364-319c-4be2-9f0b-9899476a62d9', 40),
       ('da3a9e21-dab7-4260-a6ae-692183765f4d', 'wat', 'M365КА56', '3ab7a364-319c-4be2-9f0b-9899476a62d9', 15),
       ('3e9e3b69-60bb-40b2-bb77-7e83d0075125', 'wat', 'O365КА56', 'afb42bc1-55ca-489b-b423-8edb144a42b8', 38),
       ('b75d8749-d288-43c1-bc9c-b532f3843b79', 'wat', 'T365КА56', '8b2f80ee-2ec6-4459-ab1a-fa033f62dd08', 38);

INSERT INTO flights(id, name, departure_time)
VALUES ('262400aa-ad4d-4418-bcb7-6dcfccc2d09e', 'Kineshma-Moscow', '2:30'),
       ('994a53db-237b-4d4f-ace4-3989036b872e', 'Vladimir-Moscow', '17:50');

INSERT INTO flight_routs(id, flight, rout)
VALUES ('7f394718-235e-49c5-8bb7-bc48bbe94204', '262400aa-ad4d-4418-bcb7-6dcfccc2d09e',
        '659027ed-857c-43f8-a910-3793c5827aed'),
       ('8b66888c-3071-4c52-a3a0-ed8e27167f84', '262400aa-ad4d-4418-bcb7-6dcfccc2d09e',
        '419393c6-6965-4c24-a84c-d860996581ee'),
       ('eebb1ad5-065b-40eb-bdf3-6db3b770ea83', '262400aa-ad4d-4418-bcb7-6dcfccc2d09e',
        '257fe0dc-f991-418b-8e30-6566306ab0a7'),
       ('589809c8-6f3b-4689-9113-8dac3e8bb643', '994a53db-237b-4d4f-ace4-3989036b872e',
        '419393c6-6965-4c24-a84c-d860996581ee'),
       ('6d7ea1e3-0200-47cb-bc04-bf0edb11ed9c', '994a53db-237b-4d4f-ace4-3989036b872e',
        '257fe0dc-f991-418b-8e30-6566306ab0a7');

INSERT INTO flight_runs (id, bus_id, price, flight_id)
VALUES ('969693c2-96ec-4ef3-9e3b-fde21af191da', '705de7fb-ddac-4790-832d-d81372342f5b', 500,
        '262400aa-ad4d-4418-bcb7-6dcfccc2d09e'),
       ('4eafb445-d4b4-4efd-a25c-6e2b9ecec88e', '3e9e3b69-60bb-40b2-bb77-7e83d0075125', 700,
        '994a53db-237b-4d4f-ace4-3989036b872e');

INSERT INTO tickets (flight_run_id, first_name, last_name, place)
VALUES ('969693c2-96ec-4ef3-9e3b-fde21af191da', 'Gruto', 'Gusto', 30);