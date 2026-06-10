package be.ehb.ngo.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDateTime;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "date is required")
    private LocalDateTime date;
    @NotBlank(message = "name is required")
    private String name;
    @NotBlank(message = "description is required")
    private String description;
    @NotBlank(message = "Organizer is required")
    private String organizer;
    @NotBlank(message = "email is required")
    @Email(message = "email should be valid")
    private String contact;
    @ManyToOne
    private Location location;

    public Event() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public LocalDateTime getDate() { return date; }
    public void setDate(LocalDateTime date) { this.date = date; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getOrganizer() { return organizer; }
    public void setOrganizer(String organizer) { this.organizer = organizer; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public Location getLocation() { return location; }
    public void setLocation(Location location) { this.location = location; }
}