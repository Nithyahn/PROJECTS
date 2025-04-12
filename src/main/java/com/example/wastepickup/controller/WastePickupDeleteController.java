package com.example.wastepickup.controller;

import com.example.wastepickup.service.WastePickupServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequestMapping("/wastepickup")
public class WastePickupDeleteController {

    @Autowired
    @Qualifier("filteredService") // Adjust qualifier if needed
    private WastePickupServiceInterface wastePickupService;

    @GetMapping("/delete/{id}")
    public String deleteWastePickup(@PathVariable Long id) {
        wastePickupService.deleteWastePickup(id);
        return "redirect:/wastepickup/"; // Redirect to updated dashboard
    }
}
