package be.ehb.ngo.controller;

import be.ehb.ngo.model.Location;
import be.ehb.ngo.repository.LocationRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locations")
@CrossOrigin(origins = "*")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    // GET: Haal alle locaties op voor de dropdown in het Vue-formulier
    @GetMapping
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    // POST: Optioneel, om makkelijk een nieuwe locatie toe te voegen via de frontend of Postman
    @PostMapping
    public Location createLocation(@Valid @RequestBody Location location) {
        return locationRepository.save(location);
    }
}