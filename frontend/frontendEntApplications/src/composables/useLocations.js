import { reactive } from 'vue'

const API_BASE_URL = 'http://localhost:8080/api'
const locations = reactive([])

export async function fetchLocations() {
  const response = await fetch(`${API_BASE_URL}/locations`)
  if (!response.ok) {
    throw new Error('Kon locaties niet laden.')
  }

  const data = await response.json()
  locations.splice(0, locations.length, ...data)
  return locations
}

export async function createLocation(location) {
  const response = await fetch(`${API_BASE_URL}/locations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(location),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'Kon locatie niet opslaan.')
  }

  const created = await response.json()
  locations.push(created)
  return created
}

export function useLocations() {
  return { locations, fetchLocations, createLocation }
}
