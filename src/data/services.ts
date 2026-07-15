export type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    number: '01',
    title: 'Creative Direction',
    shortTitle: 'Direction',
    description: 'Placeholder — define the visual world, narrative, and creative system that can guide a project from concept through execution.',
    deliverables: ['Potential deliverable — visual direction', 'Potential deliverable — campaign concept', 'Potential deliverable — production guidance'],
    idealFor: 'Placeholder — describe the projects or collaborators this service is best suited to.',
  },
  {
    number: '02',
    title: 'Brand Strategy',
    shortTitle: 'Strategy',
    description: 'Placeholder — shape a clear foundation for how a brand looks, speaks, and makes decisions across creative touchpoints.',
    deliverables: ['Potential deliverable — positioning workshop', 'Potential deliverable — audience framework', 'Potential deliverable — brand direction'],
    idealFor: 'Placeholder — describe the stage, need, or brand context this service supports.',
  },
  {
    number: '03',
    title: 'UGC & Content Creation',
    shortTitle: 'Content',
    description: 'Placeholder — plan and create platform-aware content with a considered visual perspective and a human point of view.',
    deliverables: ['Potential deliverable — content concepts', 'Potential deliverable — short-form assets', 'Potential deliverable — usage-ready edits'],
    idealFor: 'Placeholder — describe the products, stories, or content needs that are a fit.',
  },
  {
    number: '04',
    title: 'Photography & Video',
    shortTitle: 'Image-making',
    description: 'Placeholder — create still and moving imagery that carries an intentional mood, composition, and sense of place.',
    deliverables: ['Potential deliverable — shot direction', 'Potential deliverable — photography', 'Potential deliverable — video capture and edit'],
    idealFor: 'Placeholder — describe the editorial, brand, or campaign applications for this work.',
  },
  {
    number: '05',
    title: 'Styling & Aesthetics',
    shortTitle: 'Styling',
    description: 'Placeholder — build a cohesive visual language through wardrobe, props, setting, color, and precise aesthetic choices.',
    deliverables: ['Potential deliverable — mood and reference deck', 'Potential deliverable — wardrobe or prop direction', 'Potential deliverable — on-set styling'],
    idealFor: 'Placeholder — describe the shoots, spaces, or visual systems that benefit from styling.',
  },
  {
    number: '06',
    title: 'Marketing & Content Strategy',
    shortTitle: 'Planning',
    description: 'Placeholder — connect creative ideas to a practical content plan with clear themes, formats, and publishing rhythms.',
    deliverables: ['Potential deliverable — content pillars', 'Potential deliverable — campaign plan', 'Potential deliverable — editorial calendar'],
    idealFor: 'Placeholder — describe the teams or creative programs this strategic support serves.',
  },
  {
    number: '07',
    title: 'Website Design',
    shortTitle: 'Digital',
    description: 'Placeholder — translate a creative identity into an expressive, usable, responsive digital experience.',
    deliverables: ['Potential deliverable — site direction', 'Potential deliverable — responsive design', 'Potential deliverable — implementation handoff'],
    idealFor: 'Placeholder — describe the portfolio, campaign, or brand sites this service is intended for.',
  },
];
