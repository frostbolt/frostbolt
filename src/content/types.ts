import type { Skill } from "./skill"

export type SocialIcon = ['far' | 'fab', string]

export interface Social {
  href: string
  alt?: string
  icon: SocialIcon
}

export interface Experience {
  from: string
  to: string
  occupation: string
  company: string
  description: string
  skills?: Skill[]
}

export interface PersonalPageCfg {
  name: string
  occupation: string
  shortDesc: string
  socials: Social[]
  mainText: string
  resume: Experience[]
  resumeLink: string
}
