import axios from 'axios'

export const API_BASE = 'http://localhost:3000/'

export const instance = axios.create({
  baseURL: API_BASE,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})
