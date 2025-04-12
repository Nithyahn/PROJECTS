package com.example.wastepickup.controller;

import com.example.wastepickup.model.WastePickup;
import com.example.wastepickup.service.WastePickupServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/wastepickup")
public class WastePickupViewController {

    @Autowired
    @Qualifier("filteredService") // This qualifier can be changed depending on which service you want to use
    private WastePickupServiceInterface wastePickupService;

    @GetMapping("/")
    public String viewWastePickups(Model model) {
        List<WastePickup> wastePickups = wastePickupService.getAllWastePickups();
        model.addAttribute("wastePickups", wastePickups);
        return "index"; // Ensure "index.html" is set up properly
    }
}
