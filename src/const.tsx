import { ExperienceType, ProjectType } from "./types"

export const WORK_EXP: ExperienceType[] = [
    {
        company: 'Microsoft',
        title: 'Senior Software Developer',
        date: 'Mar-2021 - Present',
        description: 'Build shared components/features to be used across office apps. Worked as a shield owner for the shared UX components.',
        location: 'Bengaluru, India',
        link: 'https://www.microsoft.com/en-in',
        id:1
    },
    {
        company: 'Groupon',
        title: 'Senior Software Developer',
        date: 'May 2018 – Jan 2021',
        description: 'Lead the UI Team for the revamp of support and contact us flow for merchants using ReactJS. Revamped internal deal management tool read/update performance to around 8x.',
        location: 'Bengaluru, India',
        link: 'https://www.groupon.com/',
        id:2
    },
    {
        company: 'Intutel',
        title: 'Software Developer',
        date: 'Dec 2015 - May 2018',
        description: 'Lead the product design and development on client side for intutel.com.',
        location: 'Bengaluru, India',
        link: 'https://www.intutel.com/',
        id:3
    },
    {
        company: 'HT Media',
        title: 'Software Developer',
        date: 'Jan 2015 - Nov 2015',
        description: 'Part of the team that created Restful apis for shine.com using Django. Build the client-side code using angularjs integrating the restful apis.',
        location: 'Gurgaon, India',
        link: 'https://www.shine.com/',
        id:4
    },
    {
        company: 'Hackerrank',
        title: 'Intern',
        date: 'May 2014 - July 2014',
        description: 'Implemented the gamificaton for hackerrank.com',
        location: 'Bengaluru, India',
        link: 'https://www.hackerrank.com/',
        id:5
    },
]

export const Projects : ProjectType[] = [
    {
        title: 'Reviews opinion mining',
        description: 'Developed feature based opinion mining using word vector spaces for product reviews and blogs.',
        link: 'https://www.google.com',
        tech: ['Python', 'Django', 'Scikit-learn', 'NLTK', 'MongoDB'],
        id:1
    },
    {
        title: 'Opensource contributions',
        description: 'Contributed to Various open-source application. Some of them are Python, Django, Duckduckgo , edx',
        link: 'https://www.google.com',
        tech: ['Python', 'Django', 'React', 'Perl', 'Javascript'],
        id: 2
    },
]

export const Skills = [
    {
        name: 'React',
        level: 80
    },
    {
        name: 'Python',
        level: 80
    },
    {
        name: 'JavaScript',
        level: 80
    },
    {
        name: 'TypeScript',
        level: 80
    },
    {
        name: 'HTML',
        level: 80
    },
    {
        name: 'CSS',
        level: 80
    },
    {
        name: 'Git',
        level: 80
    },
    {
        name: 'Docker',
        level: 80
    },
    {
        name: 'Linux',
        level: 80
    },
    {
        name: 'Django',
        level: 80
    },
    {
        name: 'ROR',
        level: 80
    },
    {
        name: 'Postgres',
        level: 80
    },
    {
        name: 'MongoDB',
        level: 80
    },
    {
        name: 'Redis',
        level: 80
    },
    {
        name: 'Java',
        level: 80
    },
]