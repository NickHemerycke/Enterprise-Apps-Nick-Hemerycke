# Enterprise Apps - NGO Anderlecht Website Prototype
**Student:** Nick-Safry Hemerycke
**Instelling:** Erasmus University College Brussels (EhB)
**Projectnaam:** Enterprise Apps Nick-Safry.Hemerycke

---

## Overzicht
Dit project is een functioneel prototype voor een website van een Anderlechtse NGO die zich richt op gemeenschapsopbouw en hulpverlening. Het gebruikt een ontkoppelde full-stack architectuur:
- **Backend:** Spring Boot REST API voor validatie, persistente data en JSON-services.
- **Frontend:** Vue 3 SPA met Vite en Tailwind CSS voor snelle UI-rendering.

---

## Architectuur & Designkeuzes

### Backend
- **Spring Boot REST API:** De backend levert alleen JSON, geen server-side rendering.
- **Spring Data JPA:** Entiteiten `Event` en `Location` worden opgeslagen via JPA.
- **ID-generatie:** `@GeneratedValue(strategy = GenerationType.IDENTITY)` wordt gebruikt voor stabiliteit in Spring Boot 4.
- **Validatie:** Gebruikt Jakarta Validation (`@NotBlank`, `@Email`, `@DecimalMin`) voor veilige invoer.
- **Dummy contact endpoint:** Contactformulieren worden gevalideerd en doorgegeven zonder echte SMTP-integratie.
- **Location seeding:** Bij startup worden standaardlocaties geladen met de provinciale hoofdsteden van België plus Brussel.

### Frontend
- **Vue 3 + Vite:** Snelle frontend development workflow.
- **Vue Router:** Pagina's:
  - `Home / Index`
  - `New Event`
  - `Event Details`
  - `About`
  - `Contact`
- **Tailwind CSS:** Voor een consistente en responsive layout.
- **API-koppeling:** Frontend haalt events en locaties op en verstuurt nieuwe events/contactberichten naar backend endpoints.

---

## Projectstructuur
- `/backend/enterprise-apps`: Spring Boot backend met controllers en JPA-entities.
- `/frontend/frontendEntApplications`: Vue 3 frontend met views, composables en router.
- `/start.sh`: root script om backend en frontend samen te starten.

---

## Installatie en gebruik

### Vereisten
- Java 17 of hoger
- Node.js + npm
- Optioneel: Maven, maar het project bevat een wrapper (`./mvnw`)

### Setup
1. Frontend dependencies installeren:
   ```bash
   cd frontend/frontendEntApplications
   npm install
   ```
2. Backend starten:
   ```bash
   cd backend/enterprise-apps
   ./mvnw spring-boot:run
   ```
3. Frontend starten:
   ```bash
   cd frontend/frontendEntApplications
   npm run dev
   ```

### Eindpunten
- `GET /api/events`
- `GET /api/events/{id}`
- `POST /api/events`
- `GET /api/locations`
- `POST /api/locations`
- `POST /api/contact`

---

## Extra informatie
- De backend gebruikt een in-memory H2 database bij runtime.
- Locaties zijn bij startup seeded met de provinciale hoofdsteden van België en Brussel.
- `ContactController` verwerkt het formulier als een dummy endpoint en toont de inhoud in de serverconsole.

---

## AI-ondersteunde taken
Dit project bevat onderdelen die met AI-assistentie zijn opgezet om snel te itereren en de structuur te verbeteren.
- Projectschaffolding en folderstructuur voor frontend/backend.
- Vue Router navigatie en paginarouting opzetten.
- API-koppeling tussen frontend en backend endpoints.
- Lokale validatie en frontend formulierverwerking implementeren.
- Backend startup-seeding voor Belgische hoofdsteden toevoegen.
- Probleemoplossing voor package- en repository-mismatch in de backend.

