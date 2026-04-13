import type { Education, Experience, LanguageProficiency, SkillGroup, SocialLink } from '../../types'

export type Locale = 'en' | 'fr'

export const DEFAULT_LOCALE: Locale = 'en'

export type PortfolioUiStrings = {
  nav: {
    skills: string
    experience: string
    contact: string
  }
  language: {
    optionEn: string
    optionFr: string
  }
  aria: {
    backToTop: string
    primaryNav: string
    primaryNavMobile: string
    openMenu: string
    closeMenu: string
    visitorsSection: string
    languageMenu: string
  }
  sections: {
    coreCompetencies: string
    selectedTechnologies: string
    keyAccomplishments: string
    experience: string
    education: string
    languages: string
    contact: string
    visitors: string
  }
  linksAside: string
  buttons: {
    viewExperience: string
    getInTouch: string
  }
  contactEmailPrefix: string
}

export type PortfolioLocaleBundle = {
  person: {
    name: string
    headline: string
    title: string
    location: string
    email: string
    socials: SocialLink[]
  }
  resume: {
    summary: string
    coreCompetencies: SkillGroup[]
    selectedTechnologies: SkillGroup[]
    keyAccomplishments: string[]
    experience: Experience[]
    education: Education[]
    languages: LanguageProficiency[]
  }
  ui: PortfolioUiStrings
}

const en: PortfolioLocaleBundle = {
  person: {
    name: 'Saoussen Slii',
    headline: 'Software Developer',
    title: 'M.Sc',
    location: 'Ottawa, ON',
    email: 'sawsan_sli3i@live.fr',
    socials: [
      { label: 'GitHub', href: 'https://github.com/saoussen-slii' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saoussen-slii/' },
    ],
  },
  resume: {
    summary:
      'Bilingual Software Developer with 4+ years of experience delivering scalable web applications in the broadcast and live production domain. Expert in TypeScript, Java, and SQL, with a specialized focus on UI design, system integration, and continuous improvement using Agile, Scrum, and Toyota Kata methodologies. Recognized for technical rigor in utilizing AI-coding tools.',
    coreCompetencies: [
      {
        title: 'Full-Stack Development',
        items: ['TypeScript', 'Java', 'SQL', 'React', 'Prisma', 'PostgreSQL', 'GraphQL', 'Material UI'],
      },
      {
        title: 'Agile Leadership',
        items: ['Scrum Master', 'Toyota Kata Process Lead', 'Lean Methodology'],
      },
      {
        title: 'System Design',
        items: [
          'REST API Design',
          'Domain-Driven Design (DDD)',
          'Database Schema Design',
          'UI/UX Innovation',
        ],
      },
      {
        title: 'Quality Assurance',
        items: [
          'Behavior-Driven Development (BDD)',
          'JUnit',
          'Vitest',
          'PITest (Mutation Testing)',
          'SonarQube (Static Analysis)',
          'Jenkins (Build Monitoring)',
          'Code Reviews',
        ],
      },
      {
        title: 'AI-Assisted Engineering',
        items: ['Cursor', 'GitHub Copilot'],
      },
      {
        title: 'Architecture',
        items: ['Domain-Driven Design (DDD)', 'Hexagonal (Ports & Adapters)', 'OSGi Modular Systems'],
      },
    ],
    selectedTechnologies: [
      {
        title: 'Frontend',
        items: [
          'React',
          'React Flow (Node-based UI)',
          'CSS',
          'Responsive Design',
          'WebSockets',
          'Redux',
          'Tailwind',
        ],
      },
      {
        title: 'Backend & Data',
        items: [
          'Java',
          'Node.js',
          'Prisma ORM',
          'SQL',
          'MariaDB',
          'PostgreSQL',
          'Maven (multi-module)',
        ],
      },
      {
        title: 'Tools',
        items: ['Git', 'GitLab', 'Jira', 'Cursor', 'GitHub Copilot', 'PITest'],
      },
    ],
    keyAccomplishments: [
      'UX/UI Collaboration: Proactively assessed interface usability and led technical discussions with the UX/UI team to implement design improvements and ensure technical feasibility.',
      'Project Spyglass: Designed and developed data visualization graphs and interfaces using a Prisma-backed database to enhance network monitoring and visibility.',
      'Quality Innovation: Launched "Zero Defect" challenges and successfully advocated for increased BDD coverage, significantly improving system stability.',
      'AI Efficiency: Utilized AI tools and PITest to assess test suite efficiency, leading team meetings to implement optimized testing strategies.',
      'Lean Transformation: Mentored the team on Lean methodologies, ensuring clear understanding and adoption across all development cycles.',
      'Automation & Onboarding: Developed a custom boilerplate generation script for feature folders, standardizing the project architecture and significantly reducing setup time for new developers.',
    ],
    experience: [
      {
        company: 'Ross Video',
        location: 'Ottawa, ON',
        role: 'Software Developer & Scrum Master',
        start: 'Sept 2021',
        end: 'Mar 2026',
        highlights: [
          'Project Quorum: Participated in Domain-Driven Design (DDD) to architect live production workflows.',
          'UI/UX Development: Built complex React Flow room nodes and editing interfaces, Shotbox interfaces, and the Import LCS interface.',
          'Integration: Designed new attendee interfaces for Quorum 4.0.',
          'Process Leadership: Served as Scrum Master and Process Lead, mentoring the team on Lean methodology and Toyota Kata challenges.',
        ],
      },
      {
        company: 'Women IT Teleworkers',
        location: '',
        role: 'Volunteer Software Developer',
        start: 'Jun 2021',
        end: 'Jun 2022',
        highlights: [
          'Project "Kids First": Designed the frontend interfaces and contributed to core UI/UX discussions to improve user engagement.',
          'Database Engineering: Designed and implemented the PostgreSQL database schema to support project data requirements.',
        ],
      },
      {
        company: 'Umm Al-Qura University',
        location: 'Saudi Arabia',
        role: 'Lecturer',
        start: 'Oct 2012',
        end: 'Jun 2020',
        highlights: [
          'Delivered technical courses and simplified complex engineering concepts for diverse student groups.',
        ],
      },
      {
        company: 'Engaged Partnerships for Change',
        location: 'Tunisia',
        role: 'Audit Mission Agent',
        start: 'Feb 2010',
        end: 'Feb 2010',
        highlights: [
          'Conducted interviews and analyzed working conditions, producing technical reports in English for Arabic-speaking workers.',
        ],
      },
    ],
    education: [
      {
        credential: 'Certificate',
        program: 'Web Development Program',
        institution: 'Lighthouse Labs',
        location: 'Canada',
        date: 'May 2021',
      },
      {
        credential: 'Master’s Degree',
        program: 'Information Systems Security',
        institution: 'ENSI – École Nationale des Sciences de l’Informatique',
        location: 'Tunisia',
        date: 'Jun 2009',
      },
      {
        credential: 'Bachelor’s Degree',
        program: 'Computer Science',
        institution: 'Institut Supérieur de Gestion de Tunis',
        location: 'Tunisia',
        date: 'Jun 2007',
      },
    ],
    languages: [
      { language: 'English', level: 'Professional Working' },
      { language: 'French', level: 'Professional Working' },
      { language: 'Arabic', level: 'Native' },
      { language: 'Italian', level: 'Beginner' },
    ],
  },
  ui: {
    nav: { skills: 'Skills', experience: 'Experience', contact: 'Contact' },
    language: { optionEn: 'English', optionFr: 'Français' },
    aria: {
      backToTop: 'Back to top',
      primaryNav: 'Primary',
      primaryNavMobile: 'Primary mobile',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      visitorsSection: 'Visitor statistics',
      languageMenu: 'Choose language',
    },
    sections: {
      coreCompetencies: 'Core competencies',
      selectedTechnologies: 'Selected technologies',
      keyAccomplishments: 'Key accomplishments',
      experience: 'Experience',
      education: 'Education',
      languages: 'Languages',
      contact: 'Contact',
      visitors: 'Visitors',
    },
    linksAside: 'Links',
    buttons: { viewExperience: 'View experience', getInTouch: 'Get in touch' },
    contactEmailPrefix: 'Email:',
  },
}

const fr: PortfolioLocaleBundle = {
  person: {
    name: 'Saoussen Slii',
    headline: 'Développeuse de Logiciels',
    title: 'M.Sc',
    location: 'Ottawa (ON)',
    email: 'sawsan_sli3i@live.fr',
    socials: [
      { label: 'GitHub', href: 'https://github.com/saoussen-slii' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saoussen-slii/' },
    ],
  },
  resume: {
    summary:
      'Développeuse de Logiciels bilingue avec plus de quatre ans d’expérience dans la livraison d’applications web évolutives pour le domaine de la diffusion et de la production en direct. Expertise en TypeScript, Java et SQL, avec une spécialisation en conception d’interfaces, intégration de systèmes et amélioration continue (Agile, Scrum, Toyota Kata). Reconnue pour ma rigueur technique dans l’utilisation d’outils d’IA au service du développement.',
    coreCompetencies: [
      {
        title: 'Développement full-stack',
        items: ['TypeScript', 'Java', 'SQL', 'React', 'Prisma', 'PostgreSQL', 'GraphQL', 'Material UI'],
      },
      {
        title: 'Leadership agile',
        items: ['Scrum Master', 'Responsable de processus Toyota Kata', 'Méthodologie Lean'],
      },
      {
        title: 'Conception de systèmes',
        items: [
          'Conception d’API REST',
          'Domain-Driven Design (DDD)',
          'Conception de schémas de bases de données',
          'Innovation UI/UX',
        ],
      },
      {
        title: 'Assurance qualité',
        items: [
          'Développement piloté par le comportement (BDD)',
          'JUnit',
          'Vitest',
          'PITest (tests par mutation)',
          'SonarQube (analyse statique)',
          'Jenkins (suivi des builds)',
          'Revues de code',
        ],
      },
      {
        title: 'Ingénierie assistée par l’IA',
        items: ['Cursor', 'GitHub Copilot'],
      },
      {
        title: 'Architecture',
        items: ['Domain-Driven Design (DDD)', 'Architecture hexagonale (ports et adaptateurs)', 'Systèmes modulaires OSGi'],
      },
    ],
    selectedTechnologies: [
      {
        title: 'Front-end',
        items: [
          'React',
          'React Flow (UI à base de nœuds)',
          'CSS',
          'Conception responsive',
          'WebSockets',
          'Redux',
          'Tailwind',
        ],
      },
      {
        title: 'Back-end et données',
        items: [
          'Java',
          'Node.js',
          'ORM Prisma',
          'SQL',
          'MariaDB',
          'PostgreSQL',
          'Maven (multi-modules)',
        ],
      },
      {
        title: 'Outils',
        items: ['Git', 'GitLab', 'Jira', 'Cursor', 'GitHub Copilot', 'PITest'],
      },
    ],
    keyAccomplishments: [
      'Collaboration UX/UI : évaluation proactive de l’ergonomie et animation de discussions techniques avec l’équipe UX/UI pour améliorer les interfaces et garantir la faisabilité technique.',
      'Projet Spyglass : conception et développement de graphiques et interfaces de visualisation de données (base Prisma) pour renforcer la supervision et la visibilité du réseau.',
      'Innovation qualité : lancement de défis « zéro défaut » et promotion de la couverture BDD, avec gains nets sur la stabilité du système.',
      'Efficacité grâce à l’IA : usage d’outils d’IA et de PITest pour évaluer l’efficacité des suites de tests et animation de réunions pour des stratégies d’essai optimisées.',
      'Transformation Lean : mentorat sur les méthodes Lean pour une compréhension et une adoption homogènes sur les cycles de développement.',
      'Automatisation et intégration : script de génération de squelettes pour les dossiers de fonctionnalités, standardisant l’architecture et réduisant fortement le temps d’installation pour les nouveaux développeurs.',
    ],
    experience: [
      {
        company: 'Ross Video',
        location: 'Ottawa (ON)',
        role: 'Développeuse de Logiciels et Scrum Master',
        start: 'sept. 2021',
        end: 'mars 2026',
        highlights: [
          'Projet Quorum : participation au Domain-Driven Design (DDD) pour architecturer les flux de production en direct.',
          'Développement UI/UX : nœuds et interfaces d’édition React Flow complexes, interfaces Shotbox, interface Import LCS.',
          'Intégration : conception de nouvelles interfaces pour les participants à Quorum 4.0.',
          'Pilotage de processus : Scrum Master et responsable de processus, mentorat sur le Lean et les défis Toyota Kata.',
        ],
      },
      {
        company: 'Women IT Teleworkers',
        location: '',
        role: 'Développeuse de Logiciels bénévole',
        start: 'juin 2021',
        end: 'juin 2022',
        highlights: [
          'Projet « Kids First » : conception des interfaces front-end et contribution aux échanges UI/UX pour l’engagement des utilisateurs.',
          'Ingénierie des données : conception et mise en œuvre du schéma PostgreSQL pour les besoins du projet.',
        ],
      },
      {
        company: 'Université Oumm Al-Qura',
        location: 'Arabie saoudite',
        role: 'Enseignante',
        start: 'oct. 2012',
        end: 'juin 2020',
        highlights: [
          'Cours techniques et vulgarisation de concepts d’ingénierie auprès de publics étudiants variés.',
        ],
      },
      {
        company: 'Engaged Partnerships for Change',
        location: 'Tunisie',
        role: 'Agente de mission d’audit',
        start: 'févr. 2010',
        end: 'févr. 2010',
        highlights: [
          'Entretiens et analyse des conditions de travail, rédaction de rapports techniques en anglais à destination de travailleurs arabophones.',
        ],
      },
    ],
    education: [
      {
        credential: 'Attestation',
        program: 'Programme de développement web',
        institution: 'Lighthouse Labs',
        location: 'Canada',
        date: 'mai 2021',
      },
      {
        credential: 'Maîtrise',
        program: 'Sécurité des systèmes d’information',
        institution: 'ENSI – École nationale des sciences de l’informatique',
        location: 'Tunisie',
        date: 'juin 2009',
      },
      {
        credential: 'Baccalauréat',
        program: 'Informatique',
        institution: 'Institut supérieur de gestion de Tunis',
        location: 'Tunisie',
        date: 'juin 2007',
      },
    ],
    languages: [
      { language: 'Anglais', level: 'Niveau Professionnel' },
      { language: 'Français', level: 'Niveau Professionnel' },
      { language: 'Arabe', level: 'Langue maternelle' },
      { language: 'Italien', level: 'Niveau Débutant' },
    ],
  },
  ui: {
    nav: { skills: 'Compétences', experience: 'Expérience', contact: 'Contact' },
    language: { optionEn: 'Anglais', optionFr: 'Français' },
    aria: {
      backToTop: 'Retour en haut de page',
      primaryNav: 'Principale',
      primaryNavMobile: 'Principale (mobile)',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      visitorsSection: 'Statistiques de visite',
      languageMenu: 'Choisir la langue',
    },
    sections: {
      coreCompetencies: 'Compétences clés',
      selectedTechnologies: 'Technologies choisies',
      keyAccomplishments: 'Réalisations marquantes',
      experience: 'Expérience',
      education: 'Formation',
      languages: 'Langues',
      contact: 'Contact',
      visitors: 'Visiteurs',
    },
    linksAside: 'Liens',
    buttons: { viewExperience: 'Voir l’expérience', getInTouch: 'Me contacter' },
    contactEmailPrefix: 'Courriel :',
  },
}

export const portfolioByLocale: Record<Locale, PortfolioLocaleBundle> = {
  en,
  fr,
}
