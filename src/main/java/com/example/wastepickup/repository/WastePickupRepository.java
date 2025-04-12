package com.example.wastepickup.repository; // 🔹 Updated package name

import com.example.wastepickup.model.WastePickup; // 🔹 Updated import
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WastePickupRepository extends JpaRepository<WastePickup, Long> {
}
