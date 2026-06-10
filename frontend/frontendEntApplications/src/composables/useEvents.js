import { reactive } from 'vue'

const events = reactive([
  {
    id: 1,
    title: 'Voedselinzameling Anderlecht',
    organisation: 'Foodbank Brussel',
    date: '2026-06-20',
    location: 'Sint-Guidonsplein, Anderlecht',
    email: 'contact@foodbankbrussel.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies.',
  },
  {
    id: 2,
    title: 'Buurtfeest Kuregem',
    organisation: 'Wijkcomité Kuregem',
    date: '2026-06-25',
    location: 'Birminghamstraat, Anderlecht',
    email: 'info@wijkkuregem.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 3,
    title: 'Kledinginzameling Winter',
    organisation: 'Rode Kruis Anderlecht',
    date: '2026-07-02',
    location: 'Bergensesteenweg 100, Anderlecht',
    email: 'anderlecht@rodekruis.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    id: 4,
    title: 'Infosessie Energiebesparing',
    organisation: 'Energiehuis Brussel',
    date: '2026-07-08',
    location: 'Gemeenschapscentrum De Rinck',
    email: 'info@energiehuis.brussels',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
  },
  {
    id: 5,
    title: 'Sportdag voor Jongeren',
    organisation: 'Sportdienst Anderlecht',
    date: '2026-07-15',
    location: 'Sportcentrum Neerpede',
    email: 'sport@anderlecht.brussels',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 6,
    title: 'Taallessen Nederlands',
    organisation: 'Huis van het Nederlands',
    date: '2026-07-22',
    location: 'Cultuurcentrum Escale du Nord',
    email: 'info@huisnederlandsbrussel.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.',
  },
  {
    id: 7,
    title: 'Repair Café',
    organisation: 'Repair Café Anderlecht',
    date: '2026-07-29',
    location: 'Wijkhuis Albert',
    email: 'repaircafe@anderlecht.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio.',
  },
  {
    id: 8,
    title: 'Open Atelier Kunst',
    organisation: 'Cultureel Centrum Albert',
    date: '2026-08-05',
    location: 'Albertplein, Anderlecht',
    email: 'kunst@ccalbert.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est.',
  },
  {
    id: 9,
    title: 'Solidariteitsmaaltijd',
    organisation: 'Sociaal Restaurant Anderlecht',
    date: '2026-08-12',
    location: 'Parvis Saint-Guidon',
    email: 'maaltijd@socialrestaurant.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis.',
  },
  {
    id: 10,
    title: 'Vrijwilligersdag',
    organisation: 'Vrijwilligerspunt Brussel',
    date: '2026-08-19',
    location: 'Campus Kaai, Anderlecht',
    email: 'vrijwilligers@vp-brussel.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque earum rerum hic tenetur a sapiente.',
  },
  {
    id: 11,
    title: 'Fietsherstelpunt',
    organisation: 'Cyclo vzw',
    date: '2026-08-26',
    location: 'Stationsplein Kuregem',
    email: 'info@cyclo.org',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit.',
  },
  {
    id: 12,
    title: 'Conferentie Sociale Innovatie',
    organisation: 'Anderlecht NGO',
    date: '2026-09-02',
    location: 'Erasmushogeschool Brussel, Campus Kaai',
    email: 'events@anderlecht-ngo.be',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum.',
  },
])

let nextId = events.length + 1

export function useEvents() {
  function getEvents() {
    return events
  }

  function getRecentEvents(limit = 10) {
    return [...events]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  }

  function getEventById(id) {
    return events.find((event) => event.id === Number(id))
  }

  function addEvent(event) {
    events.push({ id: nextId++, ...event })
  }

  return { events, getEvents, getRecentEvents, getEventById, addEvent }
}
