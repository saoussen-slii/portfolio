import type {
  Education,
  Experience,
  LanguageProficiency,
  SkillGroup,
  SocialLink,
} from '../types'

export const portfolioConfig = {
  person: {
    name: 'Saoussen Slii',
    headline: 'Software Developer',
    title: 'M.Sc',
    location: 'Ottawa, ON',
    email: 'sawsan_sli3i@live.fr',
    socials: [
      { label: 'GitHub', href: 'https://github.com/saoussen-slii' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saoussen-slii/' },
    ] satisfies SocialLink[],
  },

  resume: {
    summary:
      'Software Developer with 4+ years of experience delivering scalable web applications in the broadcast and live production domain. Expert in TypeScript, Java, and SQL, with a specialized focus on UI design, system integration, and continuous improvement using Agile, Scrum, and Toyota Kata methodologies. Recognized for technical rigor in utilizing AI-coding tools.',

    coreCompetencies: [
      {
        title: 'Full-Stack Development',
        items: ['TypeScript', 'Java', 'SQL', 'React', 'Prisma', 'PostgreSQL'],
      },
      {
        title: 'Agile Leadership',
        items: ['Scrum Master', 'Toyota Kata Process Lead', 'Lean Methodology'],
      },
      {
        title: 'System Design',
        items: ['REST API Design','Domain-Driven Design (DDD)', 'Database Schema Design', 'UI/UX Innovation'],
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
        ],
      },
      {
        title: 'AI-Assisted Engineering',
        items: ['Cursor', 'GitHub Copilot'],
      },
      {
        title: 'Architecture',
        items: [
          'Domain-Driven Design (DDD)',
          'Hexagonal (Ports & Adapters)',
          'OSGi Modular Systems',
        ],
      },
    ] satisfies SkillGroup[],

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
    ] satisfies SkillGroup[],

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
    ] satisfies Experience[],

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
        program: 'Applied Computer Science for Management',
        institution: 'Institut Supérieur de Gestion de Tunis',
        location: 'Tunisia',
        date: 'Jun 2007',
      },
    ] satisfies Education[],

    languages: [
      { language: 'English', level: 'Professional Working' },
      { language: 'French', level: 'Professional Working' },
      { language: 'Arabic', level: 'Native' },
    ] satisfies LanguageProficiency[],
  },
} as const
