package com.example.wastepickup.service;

import com.example.wastepickup.model.WastePickup;
import com.example.wastepickup.repository.WastePickupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service("filteredService")
public class FilteredWastePickupServiceImpl implements WastePickupServiceInterface {

    @Autowired
    private WastePickupRepository wastePickupRepository;

    @Override
    public List<WastePickup> getAllWastePickups() {
        return wastePickupRepository.findAll()
                .stream()
                .filter(pickup -> !"COMPLETED".equalsIgnoreCase(pickup.getStatus()))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<WastePickup> getWastePickupById(Long id) {
        return wastePickupRepository.findById(id);
    }

    @Override
    public WastePickup saveWastePickup(WastePickup wastePickup) {
        return wastePickupRepository.save(wastePickup);
    }

    @Override
    public void deleteWastePickup(Long id) {
        wastePickupRepository.deleteById(id);
    }
}
