package com.example.wastepickup.controller;

import com.example.wastepickup.model.WastePickup;
import com.example.wastepickup.service.WastePickupServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.Optional;

@Controller
@RequestMapping("/wastepickup")
public class WastePickupEditController {

    @Autowired
    @Qualifier("filteredService") // Adjust qualifier if needed
    private WastePickupServiceInterface wastePickupService;

    @GetMapping("/edit/{id}")
    public String editWastePickup(@PathVariable Long id, Model model) {
        Optional<WastePickup> wastePickup = wastePickupService.getWastePickupById(id);
        if (wastePickup.isPresent()) {
            model.addAttribute("wastePickup", wastePickup.get());
            return "edit"; // Ensure "edit.html" is set up properly
        } else {
            return "redirect:/wastepickup/"; 
        }
    }

    @PostMapping("/update")
    public String updateWastePickup(@ModelAttribute WastePickup wastePickup) {
        Optional<WastePickup> existingRequest = wastePickupService.getWastePickupById(wastePickup.getId());
        if (existingRequest.isPresent()) {
            wastePickupService.saveWastePickup(wastePickup);
        }
        return "redirect:/wastepickup/"; // Redirect to updated dashboard
    }
}
