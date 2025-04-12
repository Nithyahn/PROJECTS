package com.example.wastepickup.service;

import com.example.wastepickup.model.WastePickup;
import com.example.wastepickup.repository.WastePickupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;
import java.util.Optional;

@Service
public class WastePickupService {
    @Autowired
    private WastePickupRepository wastePickupRepository;

    //  Get all waste pickup requests
    public List<WastePickup> getAllWastePickups() {
        return wastePickupRepository.findAll();
    }

    // Get a waste pickup request by ID
    public Optional<WastePickup> getWastePickupById(Long id) {
        return wastePickupRepository.findById(id);
    }

    //  Save or update a waste pickup request
    public WastePickup saveWastePickup(WastePickup wastePickup) {
        return wastePickupRepository.save(wastePickup);
    }

    //  Delete a waste pickup request by ID
    public void deleteWastePickup(Long id) {
        wastePickupRepository.deleteById(id);
    }

    
}