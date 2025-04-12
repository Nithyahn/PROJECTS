package com.example.wastepickup.controller;

import com.example.wastepickup.model.WastePickup;
import com.example.wastepickup.service.WastePickupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {
    @Autowired
    private WastePickupService wastePickupService;

    @GetMapping("/")
    public String home(Model model) {
        List<WastePickup> wastePickups = wastePickupService.getAllWastePickups();
        model.addAttribute("wastePickups", wastePickups);
        return "index"; // Ensure index.html is updated for Waste Pickup requests
    }
}
