import { marked } from 'marked'
import type { PersonalPageCfg } from './types'

import mainText from './texts/mainText.md?raw'
import shortDesc from './texts/shortDesc.md?raw'
import expSnowball from './texts/expSnowball.md?raw'
import expSlTech from './texts/expSlTech.md?raw'
import expUMG from './texts/expUMG.md?raw'
import expVMedia from './texts/expVMedia.md?raw'
import expItArkh from './texts/expItArkh.md?raw'
import expF5 from './texts/expF5.md?raw'

export * from './types'

export const pageConfig: PersonalPageCfg = {
  name: 'Sergei Lushchik',
  occupation: 'Full-stack Engineer',
  shortDesc: marked.parse(shortDesc).toString(),
  resumeLink: '/Sergei_Lushchik_Resume.pdf',
  socials: [
    {
      href: 'mailto:mr.sergei.lushchik@gmail.com',
      icon: ['far', 'envelope']
    },
    {
      href: 'https://github.com/frostbolt',
      icon: ['fab', 'github']
    },
    {
      href: 'https://www.instagram.com/serge_lu',
      icon: ['fab', 'instagram']
    },
    {
      href: 'https://www.linkedin.com/in/sergey-luschik',
      icon: ['fab', 'linkedin']
    },
    {
      href: 'https://unsplash.com/@frostbolt',
      icon: ['fab', 'unsplash']
    }
  ],
  mainText: marked.parse(mainText).toString(),
  resume: [
    {
      from: 'Apr. 2021',
      to: 'present',
      occupation: 'Lead Software Engineer',
      company: 'Snowball.money',
      description: marked.parse(expSnowball).toString()
    },
    {
      from: 'Apr. 2020',
      to: 'Mar. 2021',
      occupation: 'Senior Frontend Engineer',
      company: 'Sl-Tech',
      description: marked.parse(expSlTech).toString()
    },
    {
      from: 'Aug. 2019',
      to: 'Mar. 2020',
      occupation: 'Senior Frontend Engineer',
      company: 'Union Media Group',
      description: marked.parse(expUMG).toString()
    },
    {
      from: 'July 2018',
      to: 'Aug. 2019',
      occupation: 'Frontend Engineer',
      company: 'VMedia Inc.',
      description: marked.parse(expVMedia).toString()
    },
    {
      from: 'Sep. 2018',
      to: 'Jan. 2019',
      occupation: 'Web Engineer',
      company: 'IT-Arkhangelsk',
      description: marked.parse(expItArkh).toString()
    },
    {
      from: 'June 2014',
      to: 'Jan. 2016',
      occupation: 'Frontend Developer',
      company: 'F5 Digital Agency',
      description: marked.parse(expF5).toString()
    }
  ]
}
