export function returnInitials(fullName: string, maxParts = 2) {
  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, maxParts)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function returnEmailHref(emailOrMailto: string) {
  const value = emailOrMailto.trim()
  if (!value) return 'mailto:'
  return value.startsWith('mailto:') ? value : `mailto:${value}`
}
