package be.ehb.ngo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Location { 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "name is required")
    private String name;
    @NotBlank(message = "address is required")
    private String address;
    @DecimalMin(value = "0.0", inclusive = false, message = "capacity must be greater than 0")
    private int capacity;
    

    public Location() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }


};