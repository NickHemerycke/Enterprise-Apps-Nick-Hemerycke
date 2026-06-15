package be.ehb.ngo;

import be.ehb.ngo.model.Location;
import be.ehb.ngo.repository.LocationRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LocationDataInitializer implements ApplicationRunner {

    private final LocationRepository locationRepository;

    public LocationDataInitializer(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public void run(ApplicationArguments args) {
        if (locationRepository.count() > 0) {
            return;
        }

        List<Location> capitals = List.of(
            createLocation("Brussels", "Brussels city centre", 300),
            createLocation("Antwerp", "Grote Markt 1, 2000 Antwerp", 200),
            createLocation("Bruges", "Grote Markt 1, 8000 Bruges", 200),
            createLocation("Ghent", "Korenmarkt 1, 9000 Ghent", 200),
            createLocation("Hasselt", "Grote Markt 1, 3500 Hasselt", 180),
            createLocation("Leuven", "Grote Markt 1, 3000 Leuven", 180),
            createLocation("Mons", "Grand Place 1, 7000 Mons", 180),
            createLocation("Liège", "Place Saint-Lambert 1, 4000 Liège", 180),
            createLocation("Arlon", "Grand-Rue 1, 6700 Arlon", 160),
            createLocation("Namur", "Place d'Armes 1, 5000 Namur", 180),
            createLocation("Wavre", "Grand-Place 1, 1300 Wavre", 160)
        );

        locationRepository.saveAll(capitals);
    }

    private Location createLocation(String name, String address, int capacity) {
        Location location = new Location();
        location.setName(name);
        location.setAddress(address);
        location.setCapacity(capacity);
        return location;
    }
}
