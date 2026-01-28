import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
    {
        id: 'cs1',
        title: 'Performance Optimization & A/B Testing',
        description: 'Leveraging data-driven experiments to maximize user engagement for modern marketing campaigns.',
        problem: 'Identifying bottlenecks in user journeys that hindered social engagement and website conversions.',
        strategy: 'Executed rigorous A/B testing protocols and optimized multi-platform content clusters through Mango Analytics.',
        tools: ['Google Analytics (GA4)', 'Meta Business Suite', 'Canva', 'Excel'],
        results: [
            { metric: 'Social Engagement', value: '+30%' },
            { metric: 'Website Traffic', value: '+20%' }
        ],
        image: '/images/image1.jpeg'
    },
    {
        id: 'cs2',
        title: 'Integrated SEO & Brand Visibility',
        description: 'Elevating SME market presence through keyword strategy and competitive analysis across 3 time zones.',
        problem: 'SME brands struggling to compete in saturated organic search landscapes without clear localized signals.',
        strategy: 'Implemented cross-functional brand identity alignment and keyword-focused content updates via Brainstack Australia.',
        tools: ['SEMrush', 'Google Search Console', 'Trello', 'TimeDoctor'],
        results: [
            { metric: 'Organic Visibility', value: '+35%' },
            { metric: 'Search Ranking', value: 'Top 10' }
        ],
        image: '/images/image2.jpeg'
    }
];
