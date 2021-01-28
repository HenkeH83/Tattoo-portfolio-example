import { writable } from 'svelte/store'

export const home = writable(null)
export const work = writable(null)
export const about = writable(null)
export const contact = writable(null)
export const currentWidth = writable(null)
export const currentPage = writable('home')