import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDarkMode() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}

export function toggleDarkMode() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}

export function setLightMode() {
  if (document.documentElement.getAttribute('data-theme')) {
    document.documentElement.removeAttribute('data-theme')
  }
}

export function setDarkMode() {
  document.documentElement.setAttribute('data-theme', 'dark')
}
