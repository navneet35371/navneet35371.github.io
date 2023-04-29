export type ExperienceType = {
    id: number;
    title: string;
    company: string;
    location: string;
    date: string;
    description: string;
};

export type ProjectType = {
    id: number;
    title: string;
    description: string;
    image?: string;
    link: string;
    tech: string[];
};

export type SkillType = {
    id: number;
    name: string;
    level: number;
};