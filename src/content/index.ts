import { marked } from 'marked'
import type { PersonalPageCfg } from './types'
import { Skill } from './skill'

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
      description: marked.parse(expSnowball).toString(),
      skills: [
        Skill.Ts,
        Skill.Vue3,
        Skill.Web3,
        Skill.Fastify,
        Skill.Express,
        Skill.Pgsql,
        Skill.Prisma,
        Skill.NodeJS,
        Skill.GCP,
        Skill.Docker,
        Skill.Jest,
        Skill.VueCompApi,
        Skill.Vite,
        Skill.Rollup,
        Skill.Scss,
      ]
    },
    {
      from: 'Apr. 2020',
      to: 'Mar. 2021',
      occupation: 'Senior Frontend Engineer',
      company: 'Sl-Tech',
      description: marked.parse(expSlTech).toString(),
      skills: [
        Skill.Ts,
        Skill.Vue3,
        Skill.Scss,
        Skill.Docker,
        Skill.Jest,
        Skill.VueCompApi,
        Skill.PDFJS,
        Skill.Flask,
        Skill.Vite,
        Skill.Webpack,
      ]
    },
    {
      from: 'Aug. 2019',
      to: 'Mar. 2020',
      occupation: 'Senior Frontend Engineer',
      company: 'Union Media Group',
      description: marked.parse(expUMG).toString(),
      skills: [
        Skill.VAST,
        Skill.VPAID,
        Skill.Js,
        Skill.Vue,
        Skill.Scss,
        Skill.Bootstrap,
        Skill.Docker,
        Skill.Ts,
        Skill.Webpack,
      ]
    },
    {
      from: 'July 2018',
      to: 'Aug. 2019',
      occupation: 'Frontend Engineer',
      company: 'VMedia Inc.',
      description: marked.parse(expVMedia).toString(),
      skills: [
        Skill.Js,
        Skill.AngularJS,
        Skill.Scss,
        Skill.JQuery,
      ]
    },
    {
      from: 'Sep. 2018',
      to: 'Jan. 2019',
      occupation: 'Web Engineer',
      company: 'IT-Arkhangelsk',
      description: marked.parse(expItArkh).toString(),
      skills: [
        Skill.Ts,
        Skill.Js,
        Skill.Vue,
        Skill.RoR,
        Skill.Scss,
        Skill.Webpack,
      ],
    },
    {
      from: 'June 2014',
      to: 'Jan. 2016',
      occupation: 'Frontend Developer',
      company: 'F5 Digital Agency',
      description: marked.parse(expF5).toString(),
      skills: [
        Skill.Js,
        Skill.Scss,
        Skill.Bootstrap,
        Skill.JQuery,
        Skill.Wordpress,
      ],
    }
  ]
}
