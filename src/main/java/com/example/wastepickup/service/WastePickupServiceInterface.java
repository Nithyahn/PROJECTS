package com.example.wastepickup.service;

import com.example.wastepickup.model.WastePickup;
import java.util.List;
import java.util.Optional;

public interface WastePickupServiceInterface {
    List<WastePickup> getAllWastePickups();
    Optional<WastePickup> getWastePickupById(Long id);
    WastePickup saveWastePickup(WastePickup wastePickup);
    void deleteWastePickup(Long id);
}