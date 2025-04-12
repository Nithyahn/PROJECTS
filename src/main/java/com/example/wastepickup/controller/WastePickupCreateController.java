package com.example.wastepickup.controller;

import com.example.wastepickup.model.WastePickup;
import com.example.wastepickup.service.WastePickupServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
@RequestMapping("/wastepickup")
public class WastePickupCreateController {

    @Autowired
    @Qualifier("filteredService") // Change the qualifier if needed
    private WastePickupServiceInterface wastePickupService;

    @PostMapping("/create")
    public String createWastePickup(@ModelAttribute WastePickup wastePickup) {
        wastePickupService.saveWastePickup(wastePickup);
        return "redirect:/wastepickup/"; // Redirect to updated dashboard
    }
}
