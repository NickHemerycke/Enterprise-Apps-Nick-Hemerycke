package be.ehb.ngo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @PostMapping
    public ResponseEntity<?> sendDummyContactMessage(@RequestBody Map<String, String> body) {
        String fromEmail = body.get("email");
        String messageText = body.get("message");

        if (fromEmail == null || fromEmail.isBlank() || messageText == null || messageText.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "E-mail en bericht zijn verplichte velden."));
        }

        System.out.println("Van: " + fromEmail);
        System.out.println("Naar: admin@ngoanderlecht.be");
        System.out.println("Bericht: " + messageText);

        return ResponseEntity.ok(Map.of("message", "is verzonden"));
    }
}