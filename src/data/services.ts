export type Service = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    number: '01',
    title: 'Creative Direction',
    description: 'Conceptual direction for brands, shoots, campaigns, and experiences that need a clear visual world and consistent point of view.',
    items: ['Campaign direction', 'Concept development', 'Moodboards', 'Art direction', 'Visual systems', 'Shoot planning'],
  },
  {
    number: '02',
    title: 'Brand Strategy and Identity',
    description: 'Foundational brand thinking and visual identity direction for thoughtful businesses, creative projects, and emerging concepts.',
    items: ['Positioning', 'Brand personality', 'Messaging direction', 'Visual identity', 'Color and typography', 'Brand guidelines'],
  },
  {
    number: '03',
    title: 'Photography and Content',
    description: 'Image-led content with an editorial eye, built around mood, place, texture, and the way a brand wants to be remembered.',
    items: ['Lifestyle photography', 'Hospitality and wellness imagery', 'Social content', 'UGC-style content', 'Campaign imagery', 'Content planning'],
  },
  {
    number: '04',
    title: 'Digital Experiences',
    description: 'Creative direction and visual design for portfolio, campaign, and small-business websites that need to feel cohesive and considered.',
    items: ['Portfolio and small-business websites', 'Website creative direction', 'Page structure', 'Visual design', 'Launch support'],
  },
  {
    number: '05',
    title: 'Styling and Experience',
    description: 'Styling and experiential details for shoots, spaces, and touchpoints where atmosphere matters as much as the finished image.',
    items: ['Shoot styling', 'Prop and wardrobe direction', 'Spatial mood', 'Guest or customer touchpoints', 'Experiential brand details'],
  },
];

export const coreServices = [
  'Creative Direction',
  'Brand Strategy',
  'Visual Identity',
  'Photography',
  'Content Creation',
  'Websites',
  'Social and Campaigns',
] as const;
