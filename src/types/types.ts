export type SocialLink = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Experience = {
  company: string
  location: string
  role: string
  start: string
  end: string
  highlights: string[]
}

export type Education = {
  credential: string
  program?: string
  institution: string
  location?: string
  date?: string
}

export type LanguageProficiency = {
  language: string
  level: string
}
