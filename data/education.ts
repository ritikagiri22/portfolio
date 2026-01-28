import { Education, Leadership } from '../types';

export const educationData: Education[] = [
    {
        id: 'edu1',
        degree: 'MBA - Major: Business Statistics',
        institution: 'University of New Haven, Connecticut, USA',
        period: 'Aug 2023 - Dec 2025',
        highlights: ['Specialization in Digital Marketing', 'Advanced Statistical Analysis']
    },
    {
        id: 'edu2',
        degree: 'BBA - Major: Digital Marketing',
        institution: "King's College (Affiliated to Westcliff University, California)",
        period: 'Oct 2017 - Aug 2021',
        highlights: ['Focus on Brand Management', 'Market Research Excellence']
    }
];

export const leadershipData: Leadership[] = [
    {
        id: 'lead1',
        title: 'Guest Speaker',
        organization: 'Digital Marketing for Women Entrepreneurs, Nepal',
        description: 'Delivered workshops and public talks on digital branding to promote female entrepreneurship.'
    },
    {
        id: 'lead2',
        title: 'Advisor',
        organization: 'Code for Change Hackathon',
        description: 'Advised 500+ participants on project viability and marketing strategy for tech solutions.'
    },
    {
        id: 'lead3',
        title: 'Public Relations Lead',
        organization: 'Hult Prize, King’s College',
        description: 'Managed national finals PR, coordinated outreach, and led communication strategy.'
    },
    {
        id: 'lead4',
        title: 'Trainer & Mentor',
        organization: 'Personal Branding Workshops',
        description: 'Mentored 200+ IT students nationwide on building a professional digital presence.'
    },
    {
        id: 'lead5',
        title: 'Community Project Lead',
        organization: 'Slum Area Education & Tech Drive',
        description: 'Organized rural library donations and co-created digital literacy events for underserved communities.'
    }
];
