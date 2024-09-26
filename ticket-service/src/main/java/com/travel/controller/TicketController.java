package com.travel.controller;


import com.travel.entity.Bus;
import com.travel.entity.Ticket;
import com.travel.service.api.TicketService;

import lombok.RequiredArgsConstructor;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;


/**
 * Контроллер для обработки заявок на покупку билетов.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/ticket")
public class TicketController {
    private final TicketService ticketService;
    @Operation(summary = "Получить автобус по ID")
    @GetMapping("/Bus")
    public Bus getBusById(@RequestParam UUID id) {
        return ticketService.getBus(id);
    }
    @Operation(summary = "Получить автобус по ID")
    @GetMapping("/TicketId")
    public Ticket getTicketById(@RequestParam UUID id){
        return null;
    }
}
