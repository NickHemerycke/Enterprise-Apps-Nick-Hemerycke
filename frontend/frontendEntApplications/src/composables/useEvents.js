import { reactive } from 'vue'

const API_BASE_URL = 'http://localhost:8080/api'
const events = reactive([])

async function fetchEvents() {
  const response = await fetch(`${API_BASE_URL}/events`)
  if (!response.ok) {
    throw new Error('Kon evenementen niet laden.')
  }

  const data = await response.json()
  events.splice(0, events.length, ...data)
  return events
}

async function fetchEventById(id) {
  const response = await fetch(`${API_BASE_URL}/events/${id}`)
  if (response.status === 404) {
    return null
  }
  if (!response.ok) {
    throw new Error('Kon evenement niet laden.')
  }

  return await response.json()
}

async function createEvent(event) {
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'Kon evenement niet opslaan.')
  }

  const created = await response.json()
  events.push(created)
  return created
}

export function useEvents() {
  return { events, fetchEvents, fetchEventById, createEvent }
}
